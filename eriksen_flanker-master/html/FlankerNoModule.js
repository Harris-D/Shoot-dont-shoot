/**************** 
 * Flanker Test *
 ****************/

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Flanker';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionRoutineBegin);
flowScheduler.add(InstructionRoutineEachFrame);
flowScheduler.add(InstructionRoutineEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(reminderRoutineBegin);
flowScheduler.add(reminderRoutineEachFrame);
flowScheduler.add(reminderRoutineEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.2.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var InstructionClock;
var text;
var key_resp_2;
var trialClock;
var fixation;
var stimuli;
var key_resp_trial;
var reminderClock;
var text_reminder;
var key_resp_3;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instruction"
  InstructionClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: "Focus your attention on the middle arrow.\n\nPress 'J' if the middle arrow points right:\n->->->->-> / <-<--><-<-\n\nand 'F' if the middle arrow points left:\n<-<-<-<-<- / ->-><-->->\n\n\n\nPress any key to begin block",
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  stimuli = new visual.TextStim({
    win: psychoJS.window,
    name: 'stimuli',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_trial = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "reminder"
  reminderClock = new util.Clock();
  text_reminder = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_reminder',
    text: 'FINISHED!\n\nREMEMBER TO UPLOAD YOUR FILE TO MOODLE',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var InstructionComponents;
function InstructionRoutineBegin() {
  //------Prepare to start Routine 'Instruction'-------
  t = 0;
  InstructionClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_2.keys = undefined;
  key_resp_2.rt = undefined;
  // keep track of which components have finished
  InstructionComponents = [];
  InstructionComponents.push(text);
  InstructionComponents.push(key_resp_2);
  
  InstructionComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function InstructionRoutineEachFrame() {
  //------Loop for each frame of Routine 'Instruction'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = InstructionClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text* updates
  if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text.tStart = t;  // (not accounting for frame time here)
    text.frameNStart = frameN;  // exact frame index
    text.setAutoDraw(true);
  }

  
  // *key_resp_2* updates
  if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_2.tStart = t;  // (not accounting for frame time here)
    key_resp_2.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
  }

  if (key_resp_2.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp_2.getKeys({keyList: [], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_2.keys = theseKeys[0].name;  // just the last key pressed
      key_resp_2.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  InstructionComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function InstructionRoutineEnd() {
  //------Ending Routine 'Instruction'-------
  InstructionComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
  if (typeof key_resp_2.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
      routineTimer.reset();
      }
  
  key_resp_2.stop();
  // the Routine "Instruction" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var trials;
var currentLoop;
var trialIterator;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 30, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'arrows.xlsx',
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = trials[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisTrial = result.value;
    thisScheduler.add(importConditions(trials));
    thisScheduler.add(trialRoutineBegin);
    thisScheduler.add(trialRoutineEachFrame);
    thisScheduler.add(trialRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

var trialComponents;
function trialRoutineBegin() {
  //------Prepare to start Routine 'trial'-------
  t = 0;
  trialClock.reset(); // clock
  frameN = -1;
  routineTimer.add(3.500000);
  // update component parameters for each repeat
  fixation.setText('+');
  stimuli.setText(Primes);
  key_resp_trial.keys = undefined;
  key_resp_trial.rt = undefined;
  // keep track of which components have finished
  trialComponents = [];
  trialComponents.push(fixation);
  trialComponents.push(stimuli);
  trialComponents.push(key_resp_trial);
  
  trialComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function trialRoutineEachFrame() {
  //------Loop for each frame of Routine 'trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = trialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *fixation* updates
  if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    fixation.tStart = t;  // (not accounting for frame time here)
    fixation.frameNStart = frameN;  // exact frame index
    fixation.setAutoDraw(true);
  }

  frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    fixation.setAutoDraw(false);
  }
  
  // *stimuli* updates
  if (t >= 1.5 && stimuli.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    stimuli.tStart = t;  // (not accounting for frame time here)
    stimuli.frameNStart = frameN;  // exact frame index
    stimuli.setAutoDraw(true);
  }

  frameRemains = 1.5 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (stimuli.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    stimuli.setAutoDraw(false);
  }
  
  // *key_resp_trial* updates
  if (t >= 1.5 && key_resp_trial.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_trial.tStart = t;  // (not accounting for frame time here)
    key_resp_trial.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_trial.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp_trial.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp_trial.clearEvents(); });
  }

  frameRemains = 1.5 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (key_resp_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    key_resp_trial.status = PsychoJS.Status.FINISHED;
  }

  if (key_resp_trial.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp_trial.getKeys({keyList: ['j', 'f'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_trial.keys = theseKeys[0].name;  // just the last key pressed
      key_resp_trial.rt = theseKeys[0].rt;
      // was this 'correct'?
      if (key_resp_trial.keys === CorrAns) {
          key_resp_trial.corr = 1;
      } else {
          key_resp_trial.corr = 0;
      }
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  trialComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEnd() {
  //------Ending Routine 'trial'-------
  trialComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // was no response the correct answer?!
  if (key_resp_trial.keys === undefined) {
    if (['None','none',undefined].includes(CorrAns)) {
       key_resp_trial.corr = 1  // correct non-response
    } else {
       key_resp_trial.corr = 0  // failed to respond (incorrectly)
    }
  }
  // store data for thisExp (ExperimentHandler)
  psychoJS.experiment.addData('key_resp_trial.keys', key_resp_trial.keys);
  psychoJS.experiment.addData('key_resp_trial.corr', key_resp_trial.corr);
  if (typeof key_resp_trial.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_trial.rt', key_resp_trial.rt);
      routineTimer.reset();
      }
  
  key_resp_trial.stop();
  return Scheduler.Event.NEXT;
}

var reminderComponents;
function reminderRoutineBegin() {
  //------Prepare to start Routine 'reminder'-------
  t = 0;
  reminderClock.reset(); // clock
  frameN = -1;
  routineTimer.add(3.000000);
  // update component parameters for each repeat
  key_resp_3.keys = undefined;
  key_resp_3.rt = undefined;
  // keep track of which components have finished
  reminderComponents = [];
  reminderComponents.push(text_reminder);
  reminderComponents.push(key_resp_3);
  
  reminderComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function reminderRoutineEachFrame() {
  //------Loop for each frame of Routine 'reminder'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = reminderClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_reminder* updates
  if (t >= 0.0 && text_reminder.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_reminder.tStart = t;  // (not accounting for frame time here)
    text_reminder.frameNStart = frameN;  // exact frame index
    text_reminder.setAutoDraw(true);
  }

  frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (text_reminder.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    text_reminder.setAutoDraw(false);
  }
  
  // *key_resp_3* updates
  if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_3.tStart = t;  // (not accounting for frame time here)
    key_resp_3.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
  }

  frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (key_resp_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    key_resp_3.status = PsychoJS.Status.FINISHED;
  }

  if (key_resp_3.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp_3.getKeys({keyList: [], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_3.keys = theseKeys[0].name;  // just the last key pressed
      key_resp_3.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  reminderComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function reminderRoutineEnd() {
  //------Ending Routine 'reminder'-------
  reminderComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
  if (typeof key_resp_3.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
      routineTimer.reset();
      }
  
  key_resp_3.stop();
  return Scheduler.Event.NEXT;
}


function endLoopIteration({thisScheduler, isTrials=true}) {
  // ------Prepare for next entry------
  return function () {
    // ------Check if user ended loop early------
    if (currentLoop.finished) {
      // Check for and save orphaned data
      if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
        psychoJS.experiment.nextEntry();
      }
      thisScheduler.stop();
    } else if (isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

  return Scheduler.Event.QUIT;
}
