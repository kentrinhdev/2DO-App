'use strict';

const STORE = [
  {
    question: "Who directed True Romance?",
    choices: ["Oliver Stone", "Tony Scott", "Quentin Tarantino", "Ron Howard"],
    answer: function() {
      return "Tony Scott";
    },
    feedback: "True Romance is a 1993 American romantic black comedy crime film, directed by Tony Scott and written by Quentin Tarantino. Although this movie was not directed by Quentin Tarantino, it is still considered part of the Tarantino universe.",
  },

  {
    question: "Who directed The Shining?",
    choices: ["Wes Craven", "John Carpenter", "Sam Raimi", "Stanley Kubrick"],
    answer: function() {
      return "Stanley Kubrick";
    },
    feedback: "The Shining is a 1980 horror film produced and directed by Stanley Kubrick and co-written with novelist Diane Johnson. The film is based on Stephen King's 1977 novel The Shining. Stanley Kubrick was an American film director, screenwriter, and producer. He is frequently cited as one of the greatest and most influential directors in cinematic history.",
  },

  {
    question: "Who directed Inception?",
    choices: ["Christopher Nolan", "JJ Abrams", "Ang Lee", "David Lynch"],
    answer: function() {
      return "Christopher Nolan";
    },
    feedback: "Christopher Edward Nolan is an English film director, screenwriter, and producer who holds both British and American citizenship. Inception is a 2010 science fiction action thriller film written, co-produced, and directed by Christopher Nolan about a thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
  },

  {
    question: "Who directed A Nightmare On Elm Street?",
    choices: ["James Wan", "Clive Barker", "Wes Craven", "Alfred Hitchcock"],
    answer: function() {
      return "Wes Craven";
    },
    feedback: "Wesley Earl Craven was an American film director, writer, producer, and actor. He was known for his pioneering work in the genre of horror films, particularly slasher films, where his impact on the genre was considered prolific and influential. On Elm Street, the monstrous spirit of a slain janitor, Fred Kruger, seeks revenge by invading the dreams of teenagers whose parents were responsible for his untimely death.",
  },

  {
    question: "Who directed The Fountain?",
    choices: ["Ang Lee", "Darren Aronosfsky", "David Lynch", "Danny Boyle"],
    answer: function() {
      return "Darren Aronosfsky";
    },
    feedback: "Darren Aronofsky is an American filmmaker and writer, who is noted for his often surreal, intellectual, melodramatic, and disturbing films. The Fountain is a 2006 film about a modern-day scientist, Tommy struggling with mortality, desperately searching for the medical breakthrough that will save the life of his cancer-stricken wife, Izzi.",
  },

  {
    question: "Who directed Super 8?",
    choices: ["George Lucas", "Alfred Hitchcock", "Steven Spielberg", "JJ Abrams"],
    answer: function() {
      return "JJ Abrams";
    },
    feedback: "As teenagers, J.J. Abrams, director of Super 8, and his friend Matt Reeves were hired by Steven Spielberg to restore some of his Super 8 home movies. Released in 2011, Super 8 takes place during the summer of 1979, where a group of friends witness a train crash and investigate subsequent unexplained events in their small town.",
  },

  {
    question: "Who directed The Princess Bride?",
    choices: ["Rob Reiner", "Robert Zemeckis", "Steven Soderbergh", "Ron Howard"],
    answer: function() {
      return "Rob Reiner";
    },
    feedback: "According to author William Goldman, when he was first trying to get the movie made in the 1970s, a then-unknown Arnold Schwarzenegger wanted to play Fezzik, and he was strongly being considered because Goldman could never get his first choice, André the Giant, to read for the role. The 1987 Princess Bride director Rob Reiner left the set during Billy Crystal's scenes because he would laugh so hard that he would feel nauseated.",
  },

  {
    question: "Who directed Pulp Fiction?",
    choices: ["David Fincher", "Martin Scorsese", "Quentin Taratino", "Guy Ritchie"],
    answer: function() {
      return "Quentin Taratino";
    },
    feedback: "Uma Thurman originally turned down the role of Mia Wallace. Quentin Tarantino, 1994 Pulp Fiction film director, was so desperate to have her as Mia, he ended up reading her the script over the phone, finally convincing her to take on the role. Tarantino is an American director, writer, and actor. His films are characterized by nonlinear storylines, satirical subject matter, an aestheticization of violence, extended scenes of dialogue, ensemble casts consisting of established and lesser-known performers, references to popular culture.",
  },

  {
    question: "Who directed Crash?",
    choices: ["Paul Haggis", "Ron Howard", "Joel Coen", "Oliver Stone"],
    answer: function() {
      return "Paul Haggis";
    },
    feedback: "Crash is a 2005 American drama film produced, directed, and co-written by Paul Haggis. The film features racial and social tensions in Los Angeles. A self-described passion piece for Haggis, Crash was inspired by a real-life incident, in which his Porsche was carjacked in 1991 outside a video store on Wilshire Boulevard. The film deals with racism in a rather impartial approach, rather than separating the characters into victims and offenders, victims of racism are often shown to be prejudiced themselves in different contexts and situations. Racist remarks and actions are often shown to stem from ignorance and misconception rather than malice.",
  },

  {
    question: "Who directed Snatch?",
    choices: ["JJ Abrams", "Guy Ritchie", "Martin Scorsese", "Quentin Tarantino"],
    answer: function() {
      return "Guy Ritchie";
    },
    feedback: "Snatch is a 2000 British-American crime comedy film written and directed by Guy Ritchie. Set in the London criminal underworld, the film contains two intertwined plots: one dealing with the search for a stolen diamond, the other with a small-time boxing promoter (Jason Statham) who finds himself under the thumb of a ruthless gangster (Alan Ford) who is ready and willing to have his subordinates carry out severe and sadistic acts of violence.",
  },
];

const STATS = {
    todoCount: 0,
    todoneCount: 0,
  }

  // const STATS = {
  //   score: 0,
  //   questionNumber: 1,
  //   correct: 0,
  //   isCorrect: false,
  //   incorrect: 0,
  //   grade: "",
  //   name: "",
  //   todoCount: 0,
  //   todoneCount: 0,
  // }