import create from "zustand";
import { persist } from "zustand/middleware";

export enum SettingsPageId {
  Main,
  Cores,
  Video,
  OSDMenu,
  InputDevices,
  Remote,
  Audio,
  System,
}

export interface UIState {
  activeTheme: string;
  setActiveTheme: (theme: string) => void;
  activeSettingsPage: SettingsPageId;
  setActiveSettingsPage: (page: SettingsPageId) => void;
}

export const useUIStateStore = create<UIState>()(
  persist(
    (set, get) => ({
      activeTheme: "mister",
      setActiveTheme: (id: string) => set({ activeTheme: id }),
      activeSettingsPage: SettingsPageId.Main,
      setActiveSettingsPage: (page: SettingsPageId) =>
        set({ activeSettingsPage: page }),
    }),
    {
      name: "uiState",
    }
  )
);

// TODO: KBD_NOMOUSE
// TODO: RUMBLE
// TODO: DVI_MODE is presented as a bool, but defaults to 2, don't know what 0 and 1 actually do

export interface IniSettings {
  // Video
  videoMode: string;
  setVideoMode: (v: string) => void;
  videoModeNtsc: string;
  setVideoModeNtsc: (v: string) => void;
  videoModePal: string;
  setVideoModePal: (v: string) => void;
  verticalScaleMode: number;
  setVerticalScaleMode: (v: number) => void;
  vsyncAdjust: number;
  setVsyncAdjust: (v: number) => void;
  refreshMin: number;
  setRefreshMin: (v: number) => void;
  refreshMax: number;
  setRefreshMax: (v: number) => void;
  dviMode: number;
  setDviMode: (v: number) => void;
  vscaleBorder: number;
  setVscaleBorder: (v: number) => void;
  vfilterDefault: string;
  setVfilterDefault: (v: string) => void;
  vfilterVerticalDefault: string;
  setVfilterVerticalDefault: (v: string) => void;
  vfilterScanlinesDefault: string;
  setVfilterScanlinesDefault: (v: string) => void;
  shmaskDefault: string;
  setShmaskDefault: (v: string) => void;
  shmaskModeDefault: number;
  setShmaskModeDefault: (v: number) => void;
  hdmiGameMode: number;
  setHdmiGameMode: (v: number) => void;
  hdmiLimited: number;
  setHdmiLimited: (v: number) => void;
  vrrMode: number;
  setVrrMode: (v: number) => void;
  vrrMinFramerate: number;
  setVrrMinFramerate: (v: number) => void;
  vrrMaxFramerate: number;
  setVrrMaxFramerate: (v: number) => void;
  vrrVesaFramerate: number;
  setVrrVesaFramerate: (v: number) => void;
  // analog options
  directVideo: number;
  setDirectVideo: (v: number) => void;
  forcedScandoubler: number;
  setForcedScandoubler: (v: number) => void;
  ypbpr: number;
  setYpbpr: (v: number) => void;
  compositeSync: number;
  setCompositeSync: (v: number) => void;
  vgaScaler: number;
  setVgaScaler: (v: number) => void;
  vgaSog: number;
  setVgaSog: (v: number) => void;
  customAspectRatio1: string;
  setCustomAspectRatio1: (v: string) => void;
  customAspectRatio2: string;
  setCustomAspectRatio2: (v: string) => void;
  hdr: number;
  setHdr: (v: number) => void;
  videoBrightness: number;
  setVideoBrightness: (v: number) => void;
  videoContrast: number;
  setVideoContrast: (v: number) => void;
  videoSaturation: number;
  setVideoSaturation: (v: number) => void;
  videoHue: number;
  setVideoHue: (v: number) => void;
  videoGainOffset: string;
  setVideoGainOffset: (v: string) => void;

  // Cores
  bootScreen: number;
  setBootScreen: (v: number) => void;
  recents: number;
  setRecents: (v: number) => void;
  videoInfo: number;
  setVideoInfo: (v: number) => void;
  controllerInfo: number;
  setControllerInfo: (v: number) => void;
  sharedFolder: string;
  setSharedFolder: (v: string) => void;
  logFileEntry: number;
  setLogFileEntry: (v: number) => void;
  keyMenuAsRgui: number;
  setKeyMenuAsRgui: (v: number) => void;

  // Input devices
  btAutoDisconnect: number;
  setBtAutoDisconnect: (v: number) => void;
  btResetBeforePair: number;
  setBtResetBeforePair: (v: number) => void;
  mouseThrottle: number;
  setMouseThrottle: (v: number) => void;
  resetCombo: number;
  setResetCombo: (v: number) => void;
  player1Controller: string;
  setPlayer1Controller: (v: string) => void;
  player2Controller: string;
  setPlayer2Controller: (v: string) => void;
  player3Controller: string;
  setPlayer3Controller: (v: string) => void;
  player4Controller: string;
  setPlayer4Controller: (v: string) => void;
  sniperMode: number;
  setSniperMode: (v: number) => void;
  spinnerThrottle: number;
  setSpinnerThrottle: (v: number) => void;
  spinnerAxis: number;
  setSpinnerAxis: (v: number) => void;
  gamepadDefaults: number;
  setGamepadDefaults: (v: number) => void;
  autoFire: number;
  setAutoFire: (v: number) => void;
  wheelForce: number;
  setWheelForce: (v: number) => void;
  wheelRange: number;
  setWheelRange: (v: number) => void;
  spinnerVid: string;
  setSpinnerVid: (v: string) => void;
  spinnerPid: string;
  setSpinnerPid: (v: string) => void;
  keyrahMode: string;
  setKeyrahMode: (v: string) => void;
  jammaVid: string;
  setJammaVid: (v: string) => void;
  jammaPid: string;
  setJammaPid: (v: string) => void;
  noMergeVid: string;
  setNoMergeVid: (v: string) => void;
  noMergePid: string;
  setNoMergePid: (v: string) => void;
  noMergeVidPid: string[];
  setNoMergeVidPid: (v: string[]) => void;
  rumble: number;
  setRumble: (v: number) => void;
  keyboardNoMouse: number;
  setKeyboardNoMouse: (v: number) => void;

  // Audio
  hdmiAudio96k: number;
  setHdmiAudio96k: (v: number) => void;
  aFilterDefault: string;
  setAFilterDefault: (v: string) => void;

  // System
  fbSize: number;
  setFbSize: (v: number) => void;
  fbTerminal: number;
  setFbTerminal: (v: number) => void;
  bootCore: string;
  setBootCore: (v: string) => void;
  bootCoreTimeout: number;
  setBootCoreTimeout: (v: number) => void;
  waitMount: string;
  setWaitMount: (v: string) => void;

  // OSD/Menu
  rbfHideDatecode: number;
  setRbfHideDatecode: (v: number) => void;
  osdRotate: number;
  setOsdRotate: (v: number) => void;
  browseExpand: number;
  setBrowseExpand: (v: number) => void;
  osdTimeout: number;
  setOsdTimeout: (v: number) => void;
  videoOff: number;
  setVideoOff: (v: number) => void;
  menuPal: number;
  setMenuPal: (v: number) => void;
  font: string;
  setFont: (v: string) => void;
  logo: number;
  setLogo: (v: number) => void;
}

export const useIniSettingsStore = create<IniSettings>()(
  persist(
    (set, get) => ({
      // Video
      videoMode: "",
      setVideoMode: (v: string) => set({ videoMode: v }),
      videoModeNtsc: "",
      setVideoModeNtsc: (v: string) => set({ videoModeNtsc: v }),
      videoModePal: "",
      setVideoModePal: (v: string) => set({ videoModePal: v }),
      verticalScaleMode: 0,
      setVerticalScaleMode: (v: number) => set({ verticalScaleMode: v }),
      vsyncAdjust: 0,
      setVsyncAdjust: (v: number) => set({ vsyncAdjust: v }),
      refreshMin: 0,
      setRefreshMin: (v: number) => set({ refreshMin: v }),
      refreshMax: 0,
      setRefreshMax: (v: number) => set({ refreshMax: v }),
      dviMode: 2,
      setDviMode: (v: number) => set({ dviMode: v }),
      vscaleBorder: 0,
      setVscaleBorder: (v: number) => set({ vscaleBorder: v }),
      vfilterDefault: "",
      setVfilterDefault: (v: string) => set({ vfilterDefault: v }),
      vfilterVerticalDefault: "",
      setVfilterVerticalDefault: (v: string) =>
        set({ vfilterVerticalDefault: v }),
      vfilterScanlinesDefault: "",
      setVfilterScanlinesDefault: (v: string) =>
        set({ vfilterScanlinesDefault: v }),
      shmaskDefault: "",
      setShmaskDefault: (v: string) => set({ shmaskDefault: v }),
      shmaskModeDefault: 0,
      setShmaskModeDefault: (v: number) => set({ shmaskModeDefault: v }),
      hdmiGameMode: 0,
      setHdmiGameMode: (v: number) => set({ hdmiGameMode: v }),
      hdmiLimited: 0,
      setHdmiLimited: (v: number) => set({ hdmiLimited: v }),
      vrrMode: 0,
      setVrrMode: (v: number) => set({ vrrMode: v }),
      vrrMinFramerate: 0,
      setVrrMinFramerate: (v: number) => set({ vrrMinFramerate: v }),
      vrrMaxFramerate: 0,
      setVrrMaxFramerate: (v: number) => set({ vrrMaxFramerate: v }),
      vrrVesaFramerate: 0,
      setVrrVesaFramerate: (v: number) => set({ vrrVesaFramerate: v }),
      directVideo: 0,
      setDirectVideo: (v: number) => set({ directVideo: v }),
      forcedScandoubler: 0,
      setForcedScandoubler: (v: number) => set({ forcedScandoubler: v }),
      ypbpr: 0,
      setYpbpr: (v: number) => set({ ypbpr: v }),
      compositeSync: 0,
      setCompositeSync: (v: number) => set({ compositeSync: v }),
      vgaScaler: 0,
      setVgaScaler: (v: number) => set({ vgaScaler: v }),
      vgaSog: 0,
      setVgaSog: (v: number) => set({ vgaSog: v }),
      customAspectRatio1: "",
      setCustomAspectRatio1: (v: string) => set({ customAspectRatio1: v }),
      customAspectRatio2: "",
      setCustomAspectRatio2: (v: string) => set({ customAspectRatio2: v }),
      hdr: 0,
      setHdr: (v: number) => set({ hdr: v }),
      videoBrightness: 50,
      setVideoBrightness: (v: number) => set({ videoBrightness: v }),
      videoContrast: 50,
      setVideoContrast: (v: number) => set({ videoContrast: v }),
      videoSaturation: 100,
      setVideoSaturation: (v: number) => set({ videoSaturation: v }),
      videoHue: 0,
      setVideoHue: (v: number) => set({ videoHue: v }),
      videoGainOffset: "1, 0, 1, 0, 1, 0",
      setVideoGainOffset: (v: string) => set({ videoGainOffset: v }),

      // Cores
      bootScreen: 1,
      setBootScreen: (v: number) => set({ bootScreen: v }),
      recents: 0,
      setRecents: (v: number) => set({ recents: v }),
      videoInfo: 0,
      setVideoInfo: (v: number) => set({ videoInfo: v }),
      controllerInfo: 6,
      setControllerInfo: (v: number) => set({ controllerInfo: v }),
      sharedFolder: "",
      setSharedFolder: (v: string) => set({ sharedFolder: v }),
      logFileEntry: 0,
      setLogFileEntry: (v: number) => set({ logFileEntry: v }),
      keyMenuAsRgui: 0,
      setKeyMenuAsRgui: (v: number) => set({ keyMenuAsRgui: v }),

      // Input devices
      btAutoDisconnect: 0,
      setBtAutoDisconnect: (v: number) => set({ btAutoDisconnect: v }),
      btResetBeforePair: 0,
      setBtResetBeforePair: (v: number) => set({ btResetBeforePair: v }),
      mouseThrottle: 0,
      setMouseThrottle: (v: number) => set({ mouseThrottle: v }),
      resetCombo: 0,
      setResetCombo: (v: number) => set({ resetCombo: v }),
      player1Controller: "",
      setPlayer1Controller: (v: string) => set({ player1Controller: v }),
      player2Controller: "",
      setPlayer2Controller: (v: string) => set({ player2Controller: v }),
      player3Controller: "",
      setPlayer3Controller: (v: string) => set({ player3Controller: v }),
      player4Controller: "",
      setPlayer4Controller: (v: string) => set({ player4Controller: v }),
      sniperMode: 0,
      setSniperMode: (v: number) => set({ sniperMode: v }),
      spinnerThrottle: 0,
      setSpinnerThrottle: (v: number) => set({ spinnerThrottle: v }),
      spinnerAxis: 0,
      setSpinnerAxis: (v: number) => set({ spinnerAxis: v }),
      gamepadDefaults: 0,
      setGamepadDefaults: (v: number) => set({ gamepadDefaults: v }),
      autoFire: 0,
      setAutoFire: (v: number) => set({ autoFire: v }),
      wheelForce: 50,
      setWheelForce: (v: number) => set({ wheelForce: v }),
      wheelRange: 0,
      setWheelRange: (v: number) => set({ wheelRange: v }),
      spinnerVid: "",
      setSpinnerVid: (v: string) => set({ spinnerVid: v }),
      spinnerPid: "",
      setSpinnerPid: (v: string) => set({ spinnerPid: v }),
      keyrahMode: "",
      setKeyrahMode: (v: string) => set({ keyrahMode: v }),
      jammaVid: "",
      setJammaVid: (v: string) => set({ jammaVid: v }),
      jammaPid: "",
      setJammaPid: (v: string) => set({ jammaPid: v }),
      noMergeVid: "",
      setNoMergeVid: (v: string) => set({ noMergeVid: v }),
      noMergePid: "",
      setNoMergePid: (v: string) => set({ noMergePid: v }),
      noMergeVidPid: [],
      setNoMergeVidPid: (v: string[]) => set({ noMergeVidPid: v }),
      rumble: 1,
      setRumble: (v: number) => set({ rumble: v }),
      keyboardNoMouse: 0,
      setKeyboardNoMouse: (v: number) => set({ keyboardNoMouse: v }),

      // Audio
      hdmiAudio96k: 0,
      setHdmiAudio96k: (v: number) => set({ hdmiAudio96k: v }),
      aFilterDefault: "",
      setAFilterDefault: (v: string) => set({ aFilterDefault: v }),

      // System
      fbSize: 0,
      setFbSize: (v: number) => set({ fbSize: v }),
      fbTerminal: 1,
      setFbTerminal: (v: number) => set({ fbTerminal: v }),
      bootCore: "",
      setBootCore: (v: string) => set({ bootCore: v }),
      bootCoreTimeout: 0,
      setBootCoreTimeout: (v: number) => set({ bootCoreTimeout: v }),
      waitMount: "",
      setWaitMount: (v: string) => set({ waitMount: v }),

      // OSD/Menu
      rbfHideDatecode: 0,
      setRbfHideDatecode: (v: number) => set({ rbfHideDatecode: v }),
      osdRotate: 0,
      setOsdRotate: (v: number) => set({ osdRotate: v }),
      browseExpand: 1,
      setBrowseExpand: (v: number) => set({ browseExpand: v }),
      osdTimeout: 0,
      setOsdTimeout: (v: number) => set({ osdTimeout: v }),
      videoOff: 0,
      setVideoOff: (v: number) => set({ videoOff: v }),
      menuPal: 0,
      setMenuPal: (v: number) => set({ menuPal: v }),
      font: "",
      setFont: (v: string) => set({ font: v }),
      logo: 1,
      setLogo: (v: number) => set({ logo: v }),
    }),
    {
      name: "iniSettings",
    }
  )
);
