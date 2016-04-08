(function(window, undefined) {
    'use strict';

    var // Localise globals
        document = window.document,
        $ = window.$,
        CIS = window.CIS = window.CIS || {};

    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();

        $(document).on('click', 'a[rel]', function(e) {
            var $a = $(this),
                rel = $a.attr('rel'),
                url = $a.attr('ajaxify');

            if (typeof url !== 'undefined') {
                switch (rel) {
                    case 'async':
                        CIS.Ajax.request.call(this, url);
                        break;
                }
                return false;
            }
            e.preventDefault();
        });
        $(document).on('submit', 'form[rel]', function(e) {
            var $form = $(this),
                rel = $form.attr('rel'),
                url = $form.attr('action');

            if (typeof url !== 'undefined') {
                switch (rel) {
                    case 'async':
                        CIS.Ajax.request.call(this, url, {
                            type: 'POST',
                            data: $form.serializeArray()
                        });
                        break;
                }
            }
            e.preventDefault();
        });
    });

    CIS.Ajax = {
        request: function(url, settings) {
            settings = settings || {};
            var context = settings.context || this;

            settings = $.extend({
                async: true,
                cache: false,
                dataType: 'json',
                type: 'GET',
                success: function(data) {
                    CIS.Ajax.response.call(context, data);
                }
            }, settings);
            $.ajax(url, settings);
        },
        response: function(data) {
            var data = data || {},
                context = this;
            if (typeof data.scripts !== 'undefined') {
                for (var i = 0, length = data.scripts.length; i < length; i++) {
                    try {
                        (new Function(data.scripts[i])).call(context);
                    } catch(ex) {
                        console.log(ex);
                    }
                }
            }
        }
    };

    CIS.Script = $.extend({
        queue: [],      // Queued scripts that were randomly placed inside <body>
        loaded: {},     // Loaded script files using CIS.Script.require function

        require: function(file, callback) {
            var self = this,
                files = (file instanceof Array) ? file : [file],
                unloadedFiles = [],
                functions = [];

            // Script files register
            for (var i = 0; i < files.length; i++) {
                if (typeof files[i] === 'string' || files[i] instanceof String) {
                    if ( ! self.loaded.hasOwnProperty(files[i])) { // File was not loaded yet
                        unloadedFiles.push(files[i]);
                        functions.push($.getScript(files[i]));
                    }
                }
            }

            if (unloadedFiles.length > 0) {
                // Check if $() is ready
                functions.push($.Deferred(function(deferred) {
                    $(deferred.resolve);
                }));

                // Trigger callback after all script files were loaded completely (random order)
                $.when.apply(self, functions).done(function() {
                    for (var j = 0; j < unloadedFiles.length; j++) {
                        self.loaded[unloadedFiles[j]] = true; // Mark file as loaded
                    }
                    callback();
                });
            } else {
                callback();
            }
        }
    }, CIS.Script);

    // Execute queued scripts
    (function(queue) {
        for (var i = 0, length = queue.length; i < length; i++) {
            if (typeof queue[i] === 'function') {
                queue[i]();
            }
        }
    })(CIS.Script.queue);

    CIS.Form = {
        displayMessage: function(id, message, type) {
            switch (type) {
                case 'form-success':
                    if (message == '') {
                        $('#' + id).removeClass('alert alert-success').empty();
                    } else {
                        $('#' + id).addClass('alert alert-success').html(message);
                    }
                    break;
                case 'form-error':
                    if (message == '') {
                        $('#' + id).removeClass('alert alert-danger').empty();
                    } else {
                        $('#' + id).addClass('alert alert-danger').html(message);
                    }
                    break;
                case 'input-error':
                    if (message == '') {
                        $('#' + id).closest('.form-group').removeClass('has-error').find('.help-block').remove();
                    } else {
                        $('#' + id)
                            .siblings('.help-block').remove().end()
                            .after(message).closest('.form-group').addClass('has-error');
                    }
                    break;
            }
        }
    };
    //slider
    // jQuery('.fullSlider').skdslider({'delay':5000, 'fadeSpeed': 2000,'showNextPrev':true,'showPlayButton':true,'autoStart':true});

})(window);
 