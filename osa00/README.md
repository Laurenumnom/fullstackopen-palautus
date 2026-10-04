# 0.4: Uusi muistiinpano

sequenceDiagram
	participant browser
	participant server
	participant database
	
	note right of browser: user clicks "save"
	
	browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
	note right of browser: POST field "note" has note text
	activate server
	server->>database: insert into notes
	server->>browser: 302 redirect /exampleapp/notes
	deactivate server
	
	note right of browser: browser fetches the whole notes page, its contents and the notes again
	
	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
	activate server
	server->>browser: HTML skeleton
	deactivate server
	
	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
	activate server
	server->>browser: stylesheet
	deactivate server
	
	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
	activate server
	server->>browser: JavaScript file
	deactivate server
	
	activate browser
	note right of browser: browser executes JavaScript asking for JSON
	browser->>server: xhttp.open GET /exampleapp/data.json
	activate server
	server->>database: select * from notes
	database->>server: raw notes list
	server->>browser: JSON formatted notes list
	deactivate server
	
	note right of browser: xhttp.onreadystatechange gets executed, composes unordered list
	deactivate browser
	
	
	
# 0.5: Single Page App

sequenceDiagram
	participant browser
	participant server
	participant database
	
	note right of browser: User navigates to page
	
	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
	activate server
	server->>browser: HTML page
	deactivate server
	
	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
	activate server
	server->>browser: stylesheet
	deactivate server
	
	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
	activate server
	server->>browser: JavaScript
	deactivate server
	
	activate browser
	browser->>server: JavaScript xhttp GET /exampleapp/data.json
	activate server
	server->>database: select * from notes
	database->>server: raw notes list
	server->>browser: JSON formatted notes list
	note right of browser: xhttp.onreadystatechange gets executed: parses and draws notes
	deactivate browser
	
# 0.6: Uusi muistiinpano

sequenceDiagram
	participant browser
	participant server
	participant database
	
	note right of browser: User clicks "Save"
	activate browser
	note right of browser: JavaScript form.onsubmit executes, cancels normal navigation
	
	note right of browser: note is added to local list and list is re-drawn
	
	browser->>server: xhttp POST /exampleapp/new_note_spa
	activate server
	note right of browser: POST data is JSON formatted "content" and "date"
	server->>database: insert into notes
	server->>browser: "message": "note created"
	deactivate server
	deactivate browser
	
