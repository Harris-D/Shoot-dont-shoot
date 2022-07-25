#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v3.1.2),
    on March 12, 2020, at 15:25
If you publish work using this script please cite the PsychoPy publications:
    Peirce, JW (2007) PsychoPy - Psychophysics software in Python.
        Journal of Neuroscience Methods, 162(1-2), 8-13.
    Peirce, JW (2009) Generating stimuli for neuroscience using PsychoPy.
        Frontiers in Neuroinformatics, 2:10. doi: 10.3389/neuro.11.010.2008
"""

from __future__ import absolute_import, division
from psychopy import locale_setup, sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)
import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '3.1.2'
expName = 'Flanker'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' %(expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\khazjep\\Desktop\\BA\\BA\\Flanker.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1024, 768], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True)
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "Instruction"
InstructionClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text="Focus your attention on the middle arrow.\n\nPress 'J' if the middle arrow points right:\n->->->->-> / <-<--><-<-\n\nand 'F' if the middle arrow points left:\n<-<-<-<-<- / ->-><-->->\n\n\n\nPress any key to begin block",
    font='Arial',
    pos=[0, 0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "trial"
trialClock = core.Clock()
fixation = visual.TextStim(win=win, name='fixation',
    text='default text',
    font='Arial',
    pos=[0, 0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
stimuli = visual.TextStim(win=win, name='stimuli',
    text='default text',
    font='Arial',
    pos=[0, 0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "reminder"
reminderClock = core.Clock()
text_reminder = visual.TextStim(win=win, name='text_reminder',
    text='FINISHED!\n\nREMEMBER TO UPLOAD YOUR FILE TO MOODLE',
    font='Arial',
    pos=[0, 0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Instruction"-------
t = 0
InstructionClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
key_resp_2 = keyboard.Keyboard()
# keep track of which components have finished
InstructionComponents = [text, key_resp_2]
for thisComponent in InstructionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "Instruction"-------
while continueRoutine:
    # get current time
    t = InstructionClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if t >= 0.0 and text.status == NOT_STARTED:
        # keep track of start time/frame for later
        text.tStart = t  # not accounting for scr refresh
        text.frameNStart = frameN  # exact frame index
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    
    # *key_resp_2* updates
    if t >= 0.0 and key_resp_2.status == NOT_STARTED:
        # keep track of start time/frame for later
        key_resp_2.tStart = t  # not accounting for scr refresh
        key_resp_2.frameNStart = frameN  # exact frame index
        win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
        key_resp_2.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
        key_resp_2.clearEvents(eventType='keyboard')
    if key_resp_2.status == STARTED:
        theseKeys = key_resp_2.getKeys(keyList=None, waitRelease=False)
        if len(theseKeys):
            theseKeys = theseKeys[0]  # at least one key was pressed
            
            # check for quit:
            if "escape" == theseKeys:
                endExpNow = True
            key_resp_2.keys = theseKeys.name  # just the last key pressed
            key_resp_2.rt = theseKeys.rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in InstructionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instruction"-------
for thisComponent in InstructionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)
# check responses
if key_resp_2.keys in ['', [], None]:  # No response was made
    key_resp_2.keys = None
thisExp.addData('key_resp_2.keys',key_resp_2.keys)
if key_resp_2.keys != None:  # we had a response
    thisExp.addData('key_resp_2.rt', key_resp_2.rt)
thisExp.addData('key_resp_2.started', key_resp_2.tStartRefresh)
thisExp.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
thisExp.nextEntry()
# the Routine "Instruction" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=30, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('arrows.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "trial"-------
    t = 0
    trialClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    routineTimer.add(3.500000)
    # update component parameters for each repeat
    fixation.setText('+')
    stimuli.setText(Primes)
    key_resp_trial = keyboard.Keyboard()
    # keep track of which components have finished
    trialComponents = [fixation, stimuli, key_resp_trial]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "trial"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = trialClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation* updates
        if t >= 0.0 and fixation.status == NOT_STARTED:
            # keep track of start time/frame for later
            fixation.tStart = t  # not accounting for scr refresh
            fixation.frameNStart = frameN  # exact frame index
            win.timeOnFlip(fixation, 'tStartRefresh')  # time at next scr refresh
            fixation.setAutoDraw(True)
        frameRemains = 0.0 + 0.5- win.monitorFramePeriod * 0.75  # most of one frame period left
        if fixation.status == STARTED and t >= frameRemains:
            # keep track of stop time/frame for later
            fixation.tStop = t  # not accounting for scr refresh
            fixation.frameNStop = frameN  # exact frame index
            win.timeOnFlip(fixation, 'tStopRefresh')  # time at next scr refresh
            fixation.setAutoDraw(False)
        
        # *stimuli* updates
        if t >= 1.5 and stimuli.status == NOT_STARTED:
            # keep track of start time/frame for later
            stimuli.tStart = t  # not accounting for scr refresh
            stimuli.frameNStart = frameN  # exact frame index
            win.timeOnFlip(stimuli, 'tStartRefresh')  # time at next scr refresh
            stimuli.setAutoDraw(True)
        frameRemains = 1.5 + 2- win.monitorFramePeriod * 0.75  # most of one frame period left
        if stimuli.status == STARTED and t >= frameRemains:
            # keep track of stop time/frame for later
            stimuli.tStop = t  # not accounting for scr refresh
            stimuli.frameNStop = frameN  # exact frame index
            win.timeOnFlip(stimuli, 'tStopRefresh')  # time at next scr refresh
            stimuli.setAutoDraw(False)
        
        # *key_resp_trial* updates
        if t >= 1.5 and key_resp_trial.status == NOT_STARTED:
            # keep track of start time/frame for later
            key_resp_trial.tStart = t  # not accounting for scr refresh
            key_resp_trial.frameNStart = frameN  # exact frame index
            win.timeOnFlip(key_resp_trial, 'tStartRefresh')  # time at next scr refresh
            key_resp_trial.status = STARTED
            # keyboard checking is just starting
            win.callOnFlip(key_resp_trial.clock.reset)  # t=0 on next screen flip
            key_resp_trial.clearEvents(eventType='keyboard')
        frameRemains = 1.5 + 2- win.monitorFramePeriod * 0.75  # most of one frame period left
        if key_resp_trial.status == STARTED and t >= frameRemains:
            # keep track of stop time/frame for later
            key_resp_trial.tStop = t  # not accounting for scr refresh
            key_resp_trial.frameNStop = frameN  # exact frame index
            win.timeOnFlip(key_resp_trial, 'tStopRefresh')  # time at next scr refresh
            key_resp_trial.status = FINISHED
        if key_resp_trial.status == STARTED:
            theseKeys = key_resp_trial.getKeys(keyList=['j', 'f'], waitRelease=False)
            if len(theseKeys):
                theseKeys = theseKeys[0]  # at least one key was pressed
                
                # check for quit:
                if "escape" == theseKeys:
                    endExpNow = True
                key_resp_trial.keys = theseKeys.name  # just the last key pressed
                key_resp_trial.rt = theseKeys.rt
                # was this 'correct'?
                if (key_resp_trial.keys == str(CorrAns)) or (key_resp_trial.keys == CorrAns):
                    key_resp_trial.corr = 1
                else:
                    key_resp_trial.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial"-------
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('fixation.started', fixation.tStartRefresh)
    trials.addData('fixation.stopped', fixation.tStopRefresh)
    trials.addData('stimuli.started', stimuli.tStartRefresh)
    trials.addData('stimuli.stopped', stimuli.tStopRefresh)
    # check responses
    if key_resp_trial.keys in ['', [], None]:  # No response was made
        key_resp_trial.keys = None
        # was no response the correct answer?!
        if str(CorrAns).lower() == 'none':
           key_resp_trial.corr = 1;  # correct non-response
        else:
           key_resp_trial.corr = 0;  # failed to respond (incorrectly)
    # store data for trials (TrialHandler)
    trials.addData('key_resp_trial.keys',key_resp_trial.keys)
    trials.addData('key_resp_trial.corr', key_resp_trial.corr)
    if key_resp_trial.keys != None:  # we had a response
        trials.addData('key_resp_trial.rt', key_resp_trial.rt)
    trials.addData('key_resp_trial.started', key_resp_trial.tStartRefresh)
    trials.addData('key_resp_trial.stopped', key_resp_trial.tStopRefresh)
    thisExp.nextEntry()
    
# completed 30 repeats of 'trials'


# ------Prepare to start Routine "reminder"-------
t = 0
reminderClock.reset()  # clock
frameN = -1
continueRoutine = True
routineTimer.add(3.000000)
# update component parameters for each repeat
key_resp_3 = keyboard.Keyboard()
# keep track of which components have finished
reminderComponents = [text_reminder, key_resp_3]
for thisComponent in reminderComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "reminder"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = reminderClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_reminder* updates
    if t >= 0.0 and text_reminder.status == NOT_STARTED:
        # keep track of start time/frame for later
        text_reminder.tStart = t  # not accounting for scr refresh
        text_reminder.frameNStart = frameN  # exact frame index
        win.timeOnFlip(text_reminder, 'tStartRefresh')  # time at next scr refresh
        text_reminder.setAutoDraw(True)
    frameRemains = 0.0 + 3- win.monitorFramePeriod * 0.75  # most of one frame period left
    if text_reminder.status == STARTED and t >= frameRemains:
        # keep track of stop time/frame for later
        text_reminder.tStop = t  # not accounting for scr refresh
        text_reminder.frameNStop = frameN  # exact frame index
        win.timeOnFlip(text_reminder, 'tStopRefresh')  # time at next scr refresh
        text_reminder.setAutoDraw(False)
    
    # *key_resp_3* updates
    if t >= 0.0 and key_resp_3.status == NOT_STARTED:
        # keep track of start time/frame for later
        key_resp_3.tStart = t  # not accounting for scr refresh
        key_resp_3.frameNStart = frameN  # exact frame index
        win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
        key_resp_3.clearEvents(eventType='keyboard')
    frameRemains = 0.0 + 3- win.monitorFramePeriod * 0.75  # most of one frame period left
    if key_resp_3.status == STARTED and t >= frameRemains:
        # keep track of stop time/frame for later
        key_resp_3.tStop = t  # not accounting for scr refresh
        key_resp_3.frameNStop = frameN  # exact frame index
        win.timeOnFlip(key_resp_3, 'tStopRefresh')  # time at next scr refresh
        key_resp_3.status = FINISHED
    if key_resp_3.status == STARTED:
        theseKeys = key_resp_3.getKeys(keyList=None, waitRelease=False)
        if len(theseKeys):
            theseKeys = theseKeys[0]  # at least one key was pressed
            
            # check for quit:
            if "escape" == theseKeys:
                endExpNow = True
            key_resp_3.keys = theseKeys.name  # just the last key pressed
            key_resp_3.rt = theseKeys.rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in reminderComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "reminder"-------
for thisComponent in reminderComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_reminder.started', text_reminder.tStartRefresh)
thisExp.addData('text_reminder.stopped', text_reminder.tStopRefresh)
# check responses
if key_resp_3.keys in ['', [], None]:  # No response was made
    key_resp_3.keys = None
thisExp.addData('key_resp_3.keys',key_resp_3.keys)
if key_resp_3.keys != None:  # we had a response
    thisExp.addData('key_resp_3.rt', key_resp_3.rt)
thisExp.addData('key_resp_3.started', key_resp_3.tStartRefresh)
thisExp.addData('key_resp_3.stopped', key_resp_3.tStopRefresh)
thisExp.nextEntry()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
