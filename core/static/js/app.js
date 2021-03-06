(function (window, document) {
    $(document).ready(function () {
        window.Testr = window.Testr || { util: {}};

        window.Testr.util.isShown = function isShown(el) {
            return $(el).css("display") !== "none";
        };

        window.removeElement = function removeElement(el) {
            el.parentElement.removeChild(el);
        };

        window.scrollToHash = function scrollToHash(id) {
            var el = document.getElementById(id);
            if (el) {
                el.scrollIntoView();
            }
        };

        function animationCallback(target) {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr("tabindex","-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            }
        }

        function onSameHost() {
            return location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname;
        }

        function onClick(event) {
            // On-page links
            if (onSameHost.call(this)) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                // Does a scroll target exist?
                if (!target.length) {
                    return false;
                }
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $("html, body").animate({
                    scrollTop: target.offset().top
                }, 1000, animationCallback.bind(this, target));
            }
        }

        $("a[href*='#']")
        // Remove links that don't actually link to anything
        .not("[href='#']")
        .not("[href='#0']")
        .click(onClick);
    });
}(window, document));
