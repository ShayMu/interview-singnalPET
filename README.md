# SignalPET Interview Assignment

## Run the app

`npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The solution also uses the docker option for the translation API on the address localhost:5000

## Task

Add a translation option to the provided page.

The translation should only support from English to German, Spanish, French, Portuguese.

## Solution

I wanted to create a workflow that will have minimum thinking when developing the app.\
For that I decided to create a Translate component that will handle all the translation process needed.

### Preparations

1. Added a context to the app that will allow saving and accessing the app selected locale.
2. In the page header there is a dropdown to select the desired language.
3. New ui component **Translate** that is behaving as a span tag with state that listens to the app context locale value.
4. Wrapping every UI text that should be translated with the new Translate component.
5. A new util file **Translation** to handle all the translation process.\
   4.1 function to change the locale.\
   4.2 function to get the locale.\
   4.3 function to translate a text to a current locale.

### Logic

#### Translation Util

I decided to use the local storage of the browser for cache, saving both the user's prefered locale and the already translated values to prevent unnecessary requests.

In the main translate function there's a check for an already existing translation according to the requested language, if exists it's retuned, else we do a request for that translation.\
When the request is done we save it in the cache for future reference and return the translation and the locale it is in.


#### UI Component - Translate

Using the App context I set up a useEffect that will call the translate function in the utils to update the displayed content.\
* When the translation is ready, making sure the locale is the same as the returned text, if so the component is updated with the new text


## Improvements

1. Server cache - Saving the cache on the client is nice for fast language change but will still make a lot of requests to the API for each client.\
a solution to that could be saving translation files on the server that already have all the relevant translations and send it to the client according to need.\
That way only one API request will be made for each language translation text.\

2. Flags for dropdown - Setting the dropdown with language names in a specific language (in this case English) can be problematic as some people won't be able to read and find their language.\
Possible solutions to that is to put each language with it's specific language alphabet or to put each language as the country flag, I would prefer flags as it is more visually appealing and remove the need to translate each language name.
