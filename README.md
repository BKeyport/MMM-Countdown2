# MMM-CountDown
This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/) which can count down the days to a date/event.

This module is an updated version of [MMM-Countdown](https://github.com/boazarad/MMM-CountDown). 

## Using the module

To use this module, add the following configuration block to the modules array in the `config/config.js` file:

```js
var config = {
    modules: [
        {
            module: 'MMM-CountDown2',
            config: {
                // See configuration options
            }
        }
    ]
}
```

## Configuration options

| Option           | Description                                                                                                           |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- |
| `position`       | *Required* Where do you want to place the counter (use standard magicmirror positions)                                |
| `event`          | *Required* Name of event to count down to (displayed above counter)                                                   |
| `date`           | *Required* Date to count down to (YYYY-MM-DD HH:MM:SS)                                                                |
| `showHours`      | Decide whether or not to display the hours. Default is true                                                           |
| `showMinutes`    | Decide whether or not to display the minutes. Default is true                                                         |
| `showSeconds`    | Decide whether or not to display the seconds. Default is true                                                         |
| `customInterval` | Change the update interval which will help reduce load if you are only showing specific time metrics. Default is 1000 |
| `daysLabel`      | Choose how you wish to display your Days label. Default is d                                                          |
| `hoursLabel`     | Choose how you wish to display your Hours label. Default is h                                                         |
| `minutesLabel`   | Choose how you wish to display your Minutes label. Default is m                                                       |
| `secondsLabel`   | Choose how you wish to display your Seconds label. Default is m                                                       |

If either of the above are missing, the module will count down to the New Millenium (3000-01-01)

## Version History

V1.0 - Adjust name, Fix counters to show 0# under 10s for all but days, remove unneeded fluff, not allow to go past time. adjust for my uses. Publish

## Planned work

* setup CSS to function correctly. 
* setup more varibles. 
* Make labels more intuitive/optional. 
* Make sections "optional" under condition.. EG: if time left is over 1 day, don't show seconds.
