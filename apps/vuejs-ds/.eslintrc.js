module.exports = { 
	env: { 
		"es6": true, "node": true }, 
	"extends": ["eslint:recommended", "plugin:vue/base"], 
	"parserOptions": { "sourceType": "module" }, 
	"rules": { "indent": [ "error", "tab" ], 
		"linebreak-style": [ "error", "unix" ], "quotes": [ "error", "double" ], "semi": [ "error", "never" ] 
	} 
}