import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
        <div>
            <h1>Welcome to Project 3</h1>
            <p>This projects displays the data from CSE 681 Project 2 in a web page.
                The application sends a Get request to the API using C# web api and then displays the information retrieved in a table on the page.
                Then I created a button page which at first no data except "Loading..." will display until the user presses on the populate table button. Then the season record table will display.
            </p>

            <p>The "Records" Page displays a table of 20202 Season record for each team.
               The "Records Button" page has a button which when pressed on will change the loading text a table of each team season's record.</p>

        </div>
    );
  }
}
