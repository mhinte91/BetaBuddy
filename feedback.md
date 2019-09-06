# PROJECT 2 Code Review: Michael Hinte

Technical Requirements         | Yes | No |
:--                            |:--  |:-- |
Has at least two models        |  x   |    |
A resource can be "Created"  |  x   |    |
A resource can be "Updated"  |  x   |    |
A resource can be "Deleted"  |  x   |    |
Users can sign in using an OAuth provider  |  x   |    |
Authorization middleware used to restrict functionality as applicable |     |  x  |
Is deployed to Heroku          |  x   |    |
OPTIONAL - The app consumes a third-party API |     |  x  |
OPTIONAL - A data resource is accessible on the server via an API (returns JSON)   |     |  x  |

#### Feedback:  _____________________________________________________<br>__________________________________________________________________<br>_______________________________________________________________

GitHub / Readme                                 | Yes | No |
:--                                    |:--  |:-- |
Description of application |     |  x  |
Link to deployed app | x |  |
Unsolved problems                      |     |  x  |
Link to Heroku                         |  x   |    |
Link to Trello                         |    |  x  |
OPTIONAL - The app's exposed API endpoints (routing) are documented   |     |  x  |
Frequent commits      |  x   |    |

Trello                                 | Yes | No |
:--                                    | :-- |:-- |
Wireframes                             |     |  x  |
User Stories tracked in lists  |  x   |    |
User Stories written using correct format "Role - Goal - Reason"  |  x   |    |

Application's Pages                           | Yes |  No |
:-- | :-- | :-- |
Application has logical and functional navigation |x | |
The application's pages have padding (don't touch the window) |x | |
The labels and inputs in forms are not "jagged" | |x |

HTML & views                       | Yes |  No |
:-- | :-- | :-- |
HTML is properly indented                     |  x   |     |
HTML is free of commented out or "dead code"  |  x   |     |
OPTIONAL - HTML inputs use validation (i.e. `pattern` attribute w/RegExp) as needed                 |     |  x   |

JavaScript                    | Yes |  No |
:-- | :-- | :-- |
Properly indented                   |  x   |     |
Free of commented out or "dead code"  |  x   |     |
Array iterator methods used instead of `for` loops |x | |
Arrow functions used for array iterator callbacks | |x |

MongooseJS Models                    | Yes |  No |
:-- | :-- | :-- |
Validations (including `enums`) used as needed  |  x   |     |
Default values used as needed  |    |  x  |
Bonus: Virtual properties used  |     |  x   |
Bonus: Instance and/or static methods used |x | |
Bonus: MongooseJS middleware hooks (pre/post save, etc) used | | x |


Additional Comments, Suggestions, Feedback:

#### Feedback:  

Great job with having a solid interaction with the different aspects of the MVC design pattern. At the core I feel like you more than demonstrated your understanding of such. I really liked the first two models you had, however I felt the notes themselves was really lacking. Your routes and controller functions were solid however.

We really wanted to see was more flushed out features, and more styling of key HTML elements. For example, the forms and buttons were very much in need of some love. You did a great job implementing other components from Bulma CSS, such as the cards for the notes and journals themselves, so what happened with the form and buttons? The styles themselves were very small, and looked more like eye sores from a design perspective. the landing page was bland and really needed more. It would have been nice to display all journals created in the app, with restricted access to edits and deletes to show case how others can use this tool you created. Also there was no real Navigation bar, or footer for that matter, which makes it really frustrating to get around the application. 

Furthermore I really think you needed to add more data, or context as to what a user selects and why. What if I'm new to climbing and your service? The app ultimately left more questions than answers in that specific context. All in all great demonstration of the techniques, execution could have been more thorough. 






