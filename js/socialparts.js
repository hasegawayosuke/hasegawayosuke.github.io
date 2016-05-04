// add hatena bookmark button
(function(){
    var elms = document.getElementsByTagName( "span" );
    for( i = 0; i < elms.length; i++ ){
        if( elms[ i ].getAttribute( "data-button" ) !== "hatena-bookmark" ) continue;
        img = document.createElement( "img" );
        img.src = "http://b.st-hatena.com/images/entry-button/button-only.gif";
        img.setAttribute( "style", "vertical-align: middle; cursor:pointer;border:none" );
        img.setAttribute( "title", "Add to hatna-bookmark" );
        var f = function( e ){
            var elm, url, title, w, s;
            elm = e.target || e.srcElement;
            url = elm.parentNode.getAttribute( "url" ) || location.href;
            title = elm.parentNode.getAttribute( "title" ) || document.title;
            w = window.open( "#", "_blank" );
            s = "http://b.hatena.ne.jp/add?mode=confirm&is_bm=1&title=" + encodeURIComponent( title ) + "&url=" + encodeURIComponent( url );
            w.location = s;
        }
        if( typeof img.addEventListener !== "undefined" ){
            img.addEventListener( "click", f, false );
        }else{
            img.attachEvent( "onclick", f );
        }
        elms[ i ].appendChild( img );
    }
 })();

// twitter
(function(){
    var elms = document.getElementsByTagName( "span" );
    for( i = 0; i < elms.length; i++ ){
        if( elms[ i ].getAttribute( "data-button" ) !== "hatena-bookmark" ) continue;
        img = document.createElement( "img" );
        img.src = "data:image/png;base64," +
			"iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAJqUlEQVRogdWa7W9bVx3H718BbO36kDqtH+610wg2bXQwEGjSJgQCNnVTJSSQeIvEJODFpPECxgtKH/LkpHl+9EPcdG1ZNwbbYLRjWze6rl3rJI6T" +
			"OnaSxvHTtWM7tu/58OJeu2kXO04HtDvSR/fm3HPO7/s793fO+d0kEoAQoGkAEEpr9PqLHHp7jUfO5FEm1nCcujcoE7qGQ2+v0esvEkrrIjVNIIQAQBJCoAkAgStQ4MDZPLvcOay+PPaJPI57jH0ij9WnazpwNo8r" + 
			"UAAEmhAIAVJJE4Dg6CcFTJ4sVl+O5lN5HBM5nZP3GENH86k8Vl8OkyfL0U90J0oaSELAWKCIyZPFMZGjaSKH/eT9SZPhjMmTxRUoIoRACmc0DpzOYhnP4jiZQ7nPcZzMYRnP8o0zWcIZDann+ho7R1fZ78ui+LLY" + 
			"73MUX5b9viy7x1bpub6GdOjNLGZPBvv4KnbfF4TxVSzeDIfezCI9PJFBHk+jjGewf0FQxnXND09kkGSv8cD7/yCNYzxDsy9Dk0+32+zLsN+4V7zpStvK/fgdP5cZzyB7M0h2bxrFk8Zehcozb/U29dLkzWB2pdk+" +
			"pNIwmsbqTvPQsMquERXFk8bhvd1ekzeN7NlYn2K0kezuNDXxpFHcaWwuFYdHr1M267MOxZ3GYYyxZzjFU39O84ePsoxOrXFmtkD3p2u8cD5Ls1fFNKJW2lrGVPaMqHx1PM1+bxrZrW44vmT3qFRD8ajY3Cm+5lP5" +
			"5itp9o2lcBj1tfpV+rtVHB4Vq0u/77iSY3G1xGeKEFxdKfKztzLsHU2huFW+9YrK2FSelz7I0jCcpMmT2tCGZHenqIbDncI0kuTHr6e5Hi/y/Btpdg0n2e9RUWr0q+BJYXPp47w6t1ZWS1ETFLRb13Jeky0K+q/l" +
			"eSdSAGAxU+KJUyp7RpI4PBvbkBRXkmo4XEkahxO8+K9VACLpEs/9RWXnYAKHK4ndXb2v4kricCfZM5Tg2MdZAEqa0BMxxJ0vAE3cXhdSSzx1VuXrvhRPn1WxjSU2tCHJYwmqoYwlsIzGGZ3MG7MkSOQ1fvFOmoah" + 
			"OJbRBE2GExv1bRxO8OTpFCvZEpoQlMopb5WitxHkioIzwTznZvO8t7jGk6eTmEfiKBtolBTD2EbIYwmso3HcU7oDhYoAQfenOR7zJdkxEEceS+BwJ1Fct/ffMxTn1xcyABRLwphtUUW+/kxP7fU2uaLGT/6qT5bD" + 
			"tbFGSRmNU4vGwRgvX9RDqKhpaEJ/5QD+eJEX383Q5Iqxqz+GZTiObPSzj8WxjcQYvJ5FCD186inlNNkfL/LsuSQ7+2M4Rm+NeyeSMhKjGvaRGA0DKzz3WoqSpr/e8iyV03CAa7ECR/+d4clTCWwjMSzDMUyDMXb0" +
			"RRn1G/EvaodPuRQ1DYHg52+qPNizQtNYHLmGRkkZWaEWtmGdv87lK6FQDoOSJm5bfGsljUvLBfquZvnVP1Wefy2JdzJXabtZEQIKJd3RQ68naehfwT5aW19NB+ThFZpGVjANLPOYZ4VAQt/eNE2r7CP6F52gRmhX" +
			"xG3qgDEhmiY4eC5BQ38UxyYTLMnDUaphG4piHVqm9VKa3iurvPy+SjxXqoi+U2C5vmTsJsV1e3w9RTPCLJnXePqVGKb+ZZQa+uThKJJtMEo15MEojX3LOD/Wd5LVgnZLeB3C9PVS3n02d6C8xq6tFHjcE2Vf/03k" +
			"oer6bINRJHlomWooQ8s09N7k0Ll45cTcyoxutRRKeiieC+awDOgabDX0yUPLSPLgTWphHVhCHlzirZC+GPMljf+FC0LoIQfwx4sq27oWcQzV1iYP3kSSB5aohm1gCWVwCVPvEt87FSWSLhozpdUVElspJU0DIUjm" +
			"Szx7doU9PbrtWvrkgSUkeWCRWtj6F7EPLrK7O8KPTkf5aOlWUvbfCif9XNEn5d1Ijj09CyiG7c30Sbb+BWohG1dlYJHGngiPu5b47fkk0/G1ypr4PG4Ibu1gIPjlW3EaTkRQ1tmuhWTrW6Ae9vZE+LZ7iVCqwEK6" +
			"WAmjz+sA6OcKwKWlPLa+BawG9eiSbL0R6iPMnq4wzkspQH/ld54Fd1OEcWaslTR+ei5KQ1cYuW5NESRbb5j6iGDuDiP3hXltZrVsnUKpfGDdnfg1I3UYvpqmoWtet9VTr6Ywkq1nnnqw9sxj651nX3eIpr4ww1dU" +
			"kvn1n4f1h1I59Mr50YcLOZoHwuw7EULuNWzVSd0O2HrmsXaHkI1rg/MGB08vceyDBKenMuSLWmVWN3UAPesECKUKfNe9gKmzPHb9enQHukNUQxccwm7g6NWv5hMhGjtv8EDLLAeG5vnb7CpFrZzUbexAuVYTopJx" +
			"ziQKfN+3wG7nHLJhr5aejajqQHmwBucNHmydZXvbHF9pmeWhtlke7p/nhycXGLmSqsw8tcQb9ev/MPFeOMd3xiI0dMyh3KV43YETN6jG3s4bPDOxwO/Ox/jN21F+fyFG3+Uk74dz63agjc+CcmZaptwiX9RwfpSg" +
			"qecGjc455O7q9utBsnbNsRG2rjnMzlmeGApx7P0Y0dXCHQIhX7y1C62nUBKf+YAplASvTqd5xhdhd1sQc+cs8jpb1XRshmTtnGUjLJ2zWLtmMbXPsrstyCN9N3jpH1HOh1aJqAVEHZ+IqVwJfzTPyJUkP/BG2NsR" +
			"ZHdbENkQbalieytIVmeQalicQaydOns7guxsCbCzJcBTrhAvvLHE0fdWGLua4uykyplJlbOTKievp+i4GOOlvy/z/KkI9q4g244FMLXPYHEGsRnjWWrY3QqStTOIpXOmIrQWcpeOqX2G7ccDfOnIFLtaA5idM+zr" +
			"0DG1BfjykWkeODbN7tYAFmcQpWvzsbdKWbNk7pjBWicW42pzBlE6g9i7gsjOIFbnTAWbU6+3dwaRO/Vnli3Y2Armjhmk5q4g5vYAlvYZrHfDRoPf7Vh1YmmfwdweoLkriHTQN4+pZQprR+ALRWPrNM/5wkhdH67w" +
			"4J/8KM5pLO3TWO9zLO3TKM5pth+d5MSHMaRwco1HugOYWqawtU9jadMb3Ze0TWNrn6axZYrHugOEk2tICBj+OM5DR/xY2qawtk9hbrs/sbZPYWmbYscRPyOXE+V/NdAPpMMXltlx5Bqm437k9kksbTrmNj+We4Ru" +
			"W9cht09iOu5nx5FrHL6wDOgfVdL637KNXo7zaM802w7rjphb/VhaJ+8p5lY/puN+th2+xqM904xejleyWiEEUiXxMnKXUDLPiYsrHPTO0eycYm+LH0vL5D1hb4ufZucUB71znLi4QiiZ/0xW+x/JJVdABeLKRQAA" +
			"AABJRU5ErkJggg==";
        img.setAttribute( "style", "vertical-align: middle; cursor:pointer;border:none;margin-left: 2px; background-color:white;padding: 0px; border: none; " );
		img.setAttribute( "height", "20" );
        img.setAttribute( "title", "tweet" );
        var f = function( e ){
            var elm, url, title, w, s;
            elm = e.target || e.srcElement;
            url = elm.parentNode.getAttribute( "url" ) || location.href;
            title = elm.parentNode.getAttribute( "title" ) || document.title;
            w = window.open( "#", "_blank" );
			s = "https://twitter.com/intent/tweet?text=" + encodeURIComponent( title ) + "&url=" + encodeURIComponent( url );
            w.location = s;
        }
        if( typeof img.addEventListener !== "undefined" ){
            img.addEventListener( "click", f, false );
        }else{
            img.attachEvent( "onclick", f );
        }
        elms[ i ].appendChild( img );
    }

	


})();
