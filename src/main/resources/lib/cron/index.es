const CronType              = Java.type('com.cronutils.model.CronType');
const CronDefinitionBuilder = Java.type('com.cronutils.model.definition.CronDefinitionBuilder');
const CronParser            = Java.type('com.cronutils.parser.CronParser');


const CRON_DEFINITION = CronDefinitionBuilder.instanceDefinitionFor(CronType.UNIX);
const parser = new CronParser(CRON_DEFINITION);


export function parse(cron) {
    return parser.parse(cron);
}
