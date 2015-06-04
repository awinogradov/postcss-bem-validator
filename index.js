var postcss = require('postcss'),
    _ = require('lodash'),
    bemNaming = require('bem-naming');

module.exports = postcss.plugin('postcss-bem-validator', function (opts) {
    opts = opts || {};

    return function(css, result) {

        css.eachRule(function(rule) {
            if(rule.parent && rule.parent.name === 'keyframes') {
                return;
            }

            var selectors = rule.selectors;

            // console.log('\n');
            // console.log(selectors);
            // console.log('\n');
            // console.log(rule);
            // console.log('\n');
            // console.log('\n');
            // console.log('\n');

            selectors.forEach(function(selector) {
                var names = _.compact(selector.split('.'));
                names.forEach(function(name) {
                    if(!bemNaming.validate(name)) {
                        result.warn(
                            'Invalid selector name "' + name + '"',
                          { node: rule }
                        );
                    }
                });
            });
        });

    };
});
