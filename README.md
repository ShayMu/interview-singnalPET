# SignalPET Interview Assignment

## Run the app

`npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The solution also uses the docker option for the translation API at the address localhost:5000

## Task

Add a translation option to the provided page.

The translation should only support from English to German, Spanish, French and Portuguese.

## Solution

The solution focuses on a workflow that has minimum overhead when developing the app.\
To achieve that, the Translate component handles all the translation processes.


### Preparations

1. A react context was added to the app, which allow saving and accessing the app selected locale.
2. Dropdown was addedto the page heqader with a select for the desired language.
3. New ui component **Translate** that is behaving as a span tag with state that listens to the app context locale value.
4. Every UI text that should be translated is rapped with the new Translate component.
5. New util file **Translation** that handles all the translation processes.\
   4.1 function to change the locale.\
   4.2 function to get the locale.\
   4.3 function to translate a text to a current locale.

### Logic

#### Translation Util

I chose to use the local storage of the browser for cache, saving both the user's prefered locale and the already translated values to prevent unnecessary requests.

In the main translate function there's a condition for an already existing translation according to the requested language, if exists it's retuned, else we do a request for that translation.\
When the request is done, it is saved in the cache for future reference and returns the translation and the language that was set.


#### UI Component - Translate

A useEffect hook is set up on the App context locale variable, whenever there is a language change a call to the translation function is made to get the translated value.\
* When the translation is ready, making sure the locale is the same as the returned text, if so the component is updated with the new text


## Improvements

1. Server cache - Saving the cache on the client is useful for fast language change but makes a lot of requests to the API for each client.\
A solution to that could be saving translation files on the server that already has all the relevant translations and send it to the client.\
That way only one API request will be made for each language translation text.\

2. Flags for dropdown - Setting the dropdown with language names in a specific language (in this case English) can be problematic as some people won't be able to find their language.\
Possible solutions to that is to put each language with it's specific language alphabet or to put each language as the country flag, I would prefer flags as it is more visually appealing and there is no need to translate each language name.
