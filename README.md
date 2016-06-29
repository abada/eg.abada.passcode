# Ti.Passcode

### eg.abada.passcode

An Alloy titanium widget passcode implementation.


![image](/docs/Simulator%20Screen%20Shot%20Jun%2020,%202016,%2012.04.29%20AM.png)

## Installation

#### Via Gittio (Stable)
```
gittio install eg.abada.passcode

```
#### Via Github

Download the latest release, and add in your config.json, under dependencies:

```json
"dependencies": {
    "eg.abada.passcode": "*"
}
```
#### Usage in Alloy Views

```xml
<Widget id="PassCodeWidget" src="eg.abada.passcode" code="1234" />
```

```javascript

// Set the success callback
$.PassCodeWidget.setOnSuccess(function() {
	alert("Passed!")
});
```


#### Usage in Controllers

```javascript

var $pc = Alloy.createWidget('eg.abada.passcode', { code: "1234" });

$pc.setOnSuccess(function() {
 	// Do the next private things
});
$window.add($pc.getView());

```

#### `setOnSuccess(cb: Function)`

Define the callback to invoke when the user inserts the correct code.
