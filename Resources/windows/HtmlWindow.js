/**
 * This file is part of CODESTRONG Mobile.
 *
 * CODESTRONG Mobile is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * CODESTRONG Mobile is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with CODESTRONG Mobile.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The CODESTRONG mobile companion app was based off the original work done by the team
 * at palatir.net which included:
 *
 * Larry Garfield
 * Pat Teglia
 * Jen Simmons
 *
 * This code can be located at: https://github.com/palantirnet/drupalcon_mobile
 *
 * The following Appcelerator Employees also spent time answering questions via phone calls, IRC
 * and email and contributed code to the original Drupalcon Mobile application.
 * 
 * Tony Guntharp
 * Chad Auld
 * Don Thorp
 * Marshall Culpepper
 * Stephen Tramer
 * Rick Blalock
 */
(function () {
    Codestrong.ui.createHtmlWindow = function (settings) {
        Drupal.setDefaults(settings, {
            title: 'title here',
            url: ''
        });

        var htmlWindow = Titanium.UI.createWindow({
            id: 'htmlWindow',
            title: settings.title,
            backgroundColor: '#FFF',
            barColor: '#414444',
            width: '100%',
            height: '100%',
            fullscreen: false
        });
        htmlWindow.orientationModes = [Ti.UI.PORTRAIT];

        var webview = Ti.UI.createWebView({
            url: settings.url,
            width: '100%',
            height: '100%'
        });
        htmlWindow.add(webview);
        htmlWindow.addEventListener('focus', function (e) {
            webview.url = settings.url;
            webview.height = '100%';
            webview.width = '100%';
        });

        return htmlWindow;
    };

})();