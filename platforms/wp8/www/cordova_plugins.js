cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.jsmobile.plugins.sms/www/sms.js",
        "id": "com.jsmobile.plugins.sms.sms",
        "clobbers": [
            "window.sms"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.jsmobile.plugins.sms": "0.0.1"
}
// BOTTOM OF METADATA
});