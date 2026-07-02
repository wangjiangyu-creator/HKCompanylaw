import {
  academicWorks,
  allRecords,
  cases,
  lawsRules,
  practiceNotes,
  topics,
} from '../src/lib/content.ts';

const failures = [];
const topicIds = new Set(topics.map((topic) => topic.id));
const recordIds = new Set();

function fail(message) {
  failures.push(message);
}

for (const topic of topics) {
  if (!topic.id || !topic.title || !topic.summary) fail(`Topic ${topic.id || '(missing id)'} is incomplete.`);
  if (!topic.questions?.length) fail(`Topic ${topic.id} has no research questions.`);
  if (!topic.statutoryAnchors?.length) fail(`Topic ${topic.id} has no statutory anchors.`);
}

for (const record of allRecords) {
  if (recordIds.has(record.id)) fail(`Duplicate record id: ${record.id}`);
  recordIds.add(record.id);

  for (const field of ['id', 'title', 'type', 'citation', 'summary', 'sourceUrl', 'importance']) {
    if (!record[field]) fail(`Record ${record.id || '(missing id)'} missing ${field}.`);
  }

  try {
    const parsed = new URL(record.sourceUrl);
    if (!['http:', 'https:'].includes(parsed.protocol)) fail(`Record ${record.id} has non-web URL.`);
  } catch {
    fail(`Record ${record.id} has invalid sourceUrl.`);
  }

  if (!record.topics?.length) fail(`Record ${record.id} has no topics.`);
  for (const topicId of record.topics || []) {
    if (!topicIds.has(topicId)) fail(`Record ${record.id} references unknown topic ${topicId}.`);
  }
}

const expectedGroups = [
  ['lawsRules', lawsRules],
  ['cases', cases],
  ['academicWorks', academicWorks],
  ['practiceNotes', practiceNotes],
];

for (const [name, records] of expectedGroups) {
  if (records.length < 8) fail(`${name} should contain at least 8 records.`);
}

if (failures.length) {
  console.error('Content validation failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Validated ${topics.length} topics and ${allRecords.length} source records.`);
