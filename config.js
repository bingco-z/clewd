/*
* https://gitgud.io/ahsk/clewd
* https://github.com/h-a-s-k/clewd
*/

// SET YOUR COOKIE BELOW

module.exports = {
    "Cookie": "sessionKey=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",
    "Ip": "0.0.0.0",
    "Port": 8444,
    "BufferSize": 8,
    "SystemInterval": 3,
    "Settings": {
        "PreventImperson": false,
        "PromptExperiments": true,
        "RetryRegenerate": false,
        "RenewAlways": true,
        "SystemExperiments": true,
        "AllSamples": false,
        "NoSamples": false,
        "StripAssistant": false,
        "StripHuman": false,
        "PassParams": false,
        "ClearFlags": false,
        "PreserveChats": false,
        "LogMessages": false
    },
    "PersonalityFormat": "{{CHAR}}'s personality: {{PERSONALITY}}",
    "ScenarioFormat": "Dialogue scenario: {{SCENARIO}}"
}

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */