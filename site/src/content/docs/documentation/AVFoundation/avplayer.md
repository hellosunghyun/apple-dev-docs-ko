---
source_path: "documentation/AVFoundation/avplayer.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayer"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avplayer:0000:0001">AVPlayer</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplayer:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplayer:0002:0001">플레이어의 재생 제어 동작을 관리하는 인터페이스를 제공하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplayer:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avplayer:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayer:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayer:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayer:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayer:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayer:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayer:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@MainActor
class AVPlayer
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="controlling-the-transport-behavior-of-a-player.md">Controlling the transport behavior of a player</a></span>
- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0002"><a href="observing-playback-state-in-swiftui.md">Observing playback state in SwiftUI</a></span>
- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0003"><a href="supporting-airplay-in-your-app.md">Supporting AirPlay in your app</a></span>
- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0004"><a href="implementing-simple-enhanced-buffering-for-your-content.md">Implementing simple enhanced buffering for your content</a></span>
- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0005"><a href="monitoring-playback-progress-in-your-app.md">Monitoring playback progress in your app</a></span>
- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0006"><a href="presenting-chapter-markers.md">Presenting chapter markers</a></span>
- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0007"><a href="selecting-subtitles-and-alternative-audio-tracks.md">Selecting subtitles and alternative audio tracks</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0009:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">플레이어는 미디어 에셋의 재생과 타이밍을 관리하는 컨트롤러 객체입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0002"><a href="avplayer.md">@@TOKEN_0@@</a> 인스턴스를 사용해 QuickTime 영화 및 MP3 오디오 파일과 같은 로컬/원격 파일 기반 미디어와 HTTP Live Streaming을 통해 제공되는 오디오/비디오 미디어를 재생할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0001">단일 미디어 에셋을 재생하려면 플레이어 객체를 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0002"><a href="avplayer/replacecurrentitem(with:">@@TOKEN_0@@</a>.md) 메서드를 사용해 플레이어 인스턴스를 재사용해 추가 미디어 에셋을 재생할 수 있지만, 한 번에 단일 미디어 에셋의 재생만 관리합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0003">또한 프레임워크에서는 미디어 에셋 큐의 재생을 관리할 수 있는 하위 클래스인 <a href="avqueueplayer.md">@@TOKEN_0@@</a>를 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0001">미디어 에셋을 재생하려면 <a href="avplayer.md">@@TOKEN_0@@</a>를 사용하며, AVFoundation은 이를 <a href="avasset.md">@@TOKEN_1@@</a> 클래스로 표현합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0002"><a href="avasset.md">@@TOKEN_0@@</a>는 미디어의 기간이나 생성일 같은 *정적* 측면만 모델링하므로, 단독으로는 <a href="avplayer.md">@@TOKEN_1@@</a>로 재생하기에 적합하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0003">에셋을 재생하려면 <a href="avplayeritem.md">@@TOKEN_0@@</a>에 정의된 해당 동적 대응 항목의 인스턴스를 생성해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0004">This object models the timing and presentation state of an asset played by an instance of <a href="avplayer.md">@@TOKEN_0@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0005">See the <a href="avplayeritem.md">@@TOKEN_0@@</a> reference for more details.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0013:0001"><a href="avplayer.md">@@TOKEN_0@@</a> is a dynamic object whose state continuously changes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0013:0002">There are two approaches you can use to observe a player’s state:</span>

- <span class="ko-segment" data-segment-id="seg:list:overview:0014:0001">**General State Observations:** You can use key-value observing (KVO) to observe state changes to many of the player’s dynamic properties, such as its <a href="avplayer/currentitem.md">@@TOKEN_0@@</a> or its playback <a href="avplayer/rate.md">@@TOKEN_1@@</a>.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0014:0002">**Timed State Observations:** KVO works well for general state observations, but isn’t intended for observing continuously changing state like the player’s time. <a href="avplayer.md">@@TOKEN_0@@</a> provides two methods to observe time changes:</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0014:0003"><a href="avplayer/addperiodictimeobserver(forinterval:queue:using:">@@TOKEN_0@@</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0014:0004"><a href="avplayer/addboundarytimeobserver(fortimes:queue:using:">@@TOKEN_0@@</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0015:0001">These methods let you observe time changes either periodically or by boundary, respectively.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0015:0002">As changes occur, invoke the callback block or closure you supply to these methods to give you the opportunity to take some action such as updating the state of your player’s user interface.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0016:0001"><a href="avplayer.md">@@TOKEN_0@@</a> and <a href="avplayeritem.md">@@TOKEN_1@@</a> are nonvisual objects, meaning that on their own they’re unable to present an asset’s video onscreen.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0016:0002">There are two primary approaches you use to present your video content onscreen:</span>

- <span class="ko-segment" data-segment-id="seg:list:overview:0017:0001">**AVKit:** The best way to present your video content is with the AVKit framework’s <a href="https://developer.apple.com/documentation/AVKit/AVPlayerViewController">@@TOKEN_0@@</a> class in iOS and tvOS, or the <a href="https://developer.apple.com/documentation/AVKit/AVPlayerView">@@TOKEN_1@@</a> class in macOS. These classes present the video content, along with playback controls and other media features giving you a full-featured playback experience.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0017:0002">**AVPlayerLayer:** When building a custom interface for your player, use <a href="avplayerlayer.md">@@TOKEN_0@@</a>. You can set this layer a view’s backing layer or add it directly to the layer hierarchy. Unlike <a href="https://developer.apple.com/documentation/AVKit/AVPlayerView">@@TOKEN_1@@</a> and <a href="https://developer.apple.com/documentation/AVKit/AVPlayerViewController">@@TOKEN_2@@</a>, a player layer doesn’t present any playback controls—it only presents the visual content onscreen. It’s up to you to build the playback transport controls to play, pause, and seek through the media.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0018:0001">Alongside the visual content presented with AVKit or <a href="avplayerlayer.md">@@TOKEN_0@@</a>, you can also present animated content synchronized with the player’s timing using <a href="avsynchronizedlayer.md">@@TOKEN_1@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0018:0002">Use a synchronized layer pass along player timing to its layer subtree.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0018:0003">You can use <a href="avsynchronizedlayer.md">@@TOKEN_0@@</a> to build custom effects in Core Animation, such as animated lower thirds or video transitions, and have them play in sync with the timing of the player’s current <a href="avplayeritem.md">@@TOKEN_1@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0019:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-player:0020:0001">Creating a player</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-player:0021:0001"><a href="avplayer/init(url:">init(url: URL)</a>-87cxx.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-player:0022:0001">Creates a new player to play a single audiovisual resource referenced by a given URL.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-player:0023:0001"><a href="avplayer/init(playeritem:">init(playerItem: AVPlayerItem?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-player:0024:0001">Creates a new player to play the specified player item.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-player:0025:0001"><a href="avplayer/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-player:0026:0001">Creates a player object.</span>

### <span class="ko-segment" data-segment-id="seg:heading:managing-the-player-item:0027:0001">Managing the player item</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-the-player-item:0028:0001"><a href="avplayer/currentitem.md">var currentItem: AVPlayerItem?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-the-player-item:0029:0001">The item for which the player is currently controlling playback.</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-the-player-item:0030:0001"><a href="avplayer/replacecurrentitem(with:">func replaceCurrentItem(with: AVPlayerItem?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-the-player-item:0031:0001">Replaces the current item with a new item.</span>

### <span class="ko-segment" data-segment-id="seg:heading:determining-player-readiness:0032:0001">Determining player readiness</span>

- <span class="ko-segment" data-segment-id="seg:list:determining-player-readiness:0033:0001"><a href="avplayer/status-swift.property.md">var status: AVPlayer.Status</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:determining-player-readiness:0034:0001">A value that indicates the readiness of a player object for playback.</span>

- <span class="ko-segment" data-segment-id="seg:list:determining-player-readiness:0035:0001"><a href="avplayer/status-swift.enum.md">AVPlayer.Status</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:determining-player-readiness:0036:0001">Status values that indicate whether a player can successfully play media.</span>

- <span class="ko-segment" data-segment-id="seg:list:determining-player-readiness:0037:0001"><a href="avplayer/error.md">var error: (any Error)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:determining-player-readiness:0038:0001">An error that caused a failure.</span>

### <span class="ko-segment" data-segment-id="seg:heading:controlling-playback:0039:0001">Controlling playback</span>

- <span class="ko-segment" data-segment-id="seg:list:controlling-playback:0040:0001"><a href="avplayer/defaultrate.md">var defaultRate: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:controlling-playback:0041:0001">A default rate at which to begin playback.</span>

- <span class="ko-segment" data-segment-id="seg:list:controlling-playback:0042:0001"><a href="avplayer/play.md">func play()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:controlling-playback:0043:0001">Begins playback of the current item.</span>

- <span class="ko-segment" data-segment-id="seg:list:controlling-playback:0044:0001"><a href="avplayer/pause.md">func pause()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:controlling-playback:0045:0001">Pauses playback of the current item.</span>

- <span class="ko-segment" data-segment-id="seg:list:controlling-playback:0046:0001"><a href="avplayer/rate.md">var rate: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:controlling-playback:0047:0001">The current playback rate.</span>

- <span class="ko-segment" data-segment-id="seg:list:controlling-playback:0048:0001"><a href="avplayer/ratedidchangenotification.md">class let rateDidChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:controlling-playback:0049:0001">A notification that a player posts when its rate changes.</span>

### <span class="ko-segment" data-segment-id="seg:heading:observing-playback-time:0050:0001">Observing playback time</span>

- <span class="ko-segment" data-segment-id="seg:list:observing-playback-time:0051:0001"><a href="avplayer/currenttime.md">func currentTime() -&gt; CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:observing-playback-time:0052:0001">Returns the current time of the current player item.</span>

- <span class="ko-segment" data-segment-id="seg:list:observing-playback-time:0053:0001"><a href="avplayer/addperiodictimeobserver(forinterval:queue:using:">func addPeriodicTimeObserver(forInterval: CMTime, queue: dispatch_queue_t?, using: (CMTime) -&gt; Void) -&gt; Any</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:observing-playback-time:0054:0001">Requests the periodic invocation of a given block during playback to report changing time.</span>

- <span class="ko-segment" data-segment-id="seg:list:observing-playback-time:0055:0001">[func addBoundaryTimeObserver(forTimes: [NSValue], queue: dispatch_queue_t?, using: () -&gt; Void) -&gt; Any](avplayer/addboundarytimeobserver(fortimes:queue:using:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:observing-playback-time:0056:0001">Requests the invocation of a block when specified times are traversed during normal playback.</span>

- <span class="ko-segment" data-segment-id="seg:list:observing-playback-time:0057:0001"><a href="avplayer/removetimeobserver(_:">func removeTimeObserver(Any)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:observing-playback-time:0058:0001">Cancels a previously registered periodic or boundary time observer.</span>

### <span class="ko-segment" data-segment-id="seg:heading:seeking-through-media:0059:0001">Seeking through media</span>

- <span class="ko-segment" data-segment-id="seg:list:seeking-through-media:0060:0001"><a href="avplayer/seek(to:">func seek(to: CMTime)</a>-87h2r.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:seeking-through-media:0061:0001">Requests that the player seek to a specified time.</span>

- <span class="ko-segment" data-segment-id="seg:list:seeking-through-media:0062:0001"><a href="avplayer/seek(to:completionhandler:">func seek(to: CMTime, completionHandler: (Bool) -&gt; Void)</a>-75bls.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:seeking-through-media:0063:0001">Requests that the player seek to a specified time, and to notify you when the seek is complete.</span>

- <span class="ko-segment" data-segment-id="seg:list:seeking-through-media:0064:0001"><a href="avplayer/seek(to:tolerancebefore:toleranceafter:">func seek(to: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:seeking-through-media:0065:0001">Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values.</span>

- <span class="ko-segment" data-segment-id="seg:list:seeking-through-media:0066:0001"><a href="avplayer/seek(to:tolerancebefore:toleranceafter:completionhandler:">func seek(to: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime, completionHandler: (Bool) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:seeking-through-media:0067:0001">Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values, and to notify you when the seek is complete.</span>

- <span class="ko-segment" data-segment-id="seg:list:seeking-through-media:0068:0001"><a href="avplayer/seek(to:">func seek(to: Date)</a>-9h9qr.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:seeking-through-media:0069:0001">Requests that the player seek to a specified date.</span>

- <span class="ko-segment" data-segment-id="seg:list:seeking-through-media:0070:0001"><a href="avplayer/seek(to:completionhandler:">func seek(to: Date, completionHandler: (Bool) -&gt; Void)</a>-wr1l.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:seeking-through-media:0071:0001">Requests that the player seek to a specified date, and to notify you when the seek is complete.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-waiting-behavior:0072:0001">Configuring waiting behavior</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-waiting-behavior:0073:0001"><a href="avplayer/automaticallywaitstominimizestalling.md">var automaticallyWaitsToMinimizeStalling: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-waiting-behavior:0074:0001">A Boolean value that indicates whether the player should automatically delay playback in order to minimize stalling.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-waiting-behavior:0075:0001"><a href="avplayer/reasonforwaitingtoplay.md">var reasonForWaitingToPlay: AVPlayer.WaitingReason?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-waiting-behavior:0076:0001">The reason the player is currently waiting for playback to begin or resume.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-waiting-behavior:0077:0001"><a href="avplayer/waitingreason.md">AVPlayer.WaitingReason</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-waiting-behavior:0078:0001">The reasons a player is waiting to begin or resume playback.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-waiting-behavior:0079:0001"><a href="avplayer/timecontrolstatus-swift.property.md">var timeControlStatus: AVPlayer.TimeControlStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-waiting-behavior:0080:0001">A value that indicates whether playback is in progress, paused indefinitely, or waiting for network conditions to improve.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-waiting-behavior:0081:0001"><a href="avplayer/timecontrolstatus-swift.enum.md">AVPlayer.TimeControlStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-waiting-behavior:0082:0001">Constants that indicate the state of playback control.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-waiting-behavior:0083:0001"><a href="avplayer/playimmediately(atrate:">func playImmediately(atRate: Float)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-waiting-behavior:0084:0001">Plays the available media data immediately, at the specified rate.</span>

### <span class="ko-segment" data-segment-id="seg:heading:responding-when-playback-ends:0085:0001">Responding when playback ends</span>

- <span class="ko-segment" data-segment-id="seg:list:responding-when-playback-ends:0086:0001"><a href="avplayer/actionatitemend-swift.property.md">var actionAtItemEnd: AVPlayer.ActionAtItemEnd</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:responding-when-playback-ends:0087:0001">The action to perform when the current player item has finished playing.</span>

- <span class="ko-segment" data-segment-id="seg:list:responding-when-playback-ends:0088:0001"><a href="avplayer/actionatitemend-swift.enum.md">AVPlayer.ActionAtItemEnd</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:responding-when-playback-ends:0089:0001">The actions a player can take when it finishes playing.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-media-selection-criteria:0090:0001">Configuring media selection criteria</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-media-selection-criteria:0091:0001"><a href="avplayer/appliesmediaselectioncriteriaautomatically.md">var appliesMediaSelectionCriteriaAutomatically: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-media-selection-criteria:0092:0001">A Boolean value that indicates whether the receiver should apply the current selection criteria automatically to player items.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-media-selection-criteria:0093:0001"><a href="avplayer/mediaselectioncriteria(formediacharacteristic:">func mediaSelectionCriteria(forMediaCharacteristic: AVMediaCharacteristic) -&gt; AVPlayerMediaSelectionCriteria?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-media-selection-criteria:0094:0001">Returns the automatic selection criteria for media items with the specified media characteristic.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-media-selection-criteria:0095:0001"><a href="avplayer/setmediaselectioncriteria(_:formediacharacteristic:">func setMediaSelectionCriteria(AVPlayerMediaSelectionCriteria?, forMediaCharacteristic: AVMediaCharacteristic)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-media-selection-criteria:0096:0001">Applies automatic selection criteria for media that has the specified media characteristic.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-player-output:0097:0001">Accessing player output</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-player-output:0098:0001"><a href="avplayer/videooutput.md">var videoOutput: AVPlayerVideoOutput?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-player-output:0099:0001">The video output for this player.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-audio-behavior:0100:0001">Configuring audio behavior</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-audio-behavior:0101:0001"><a href="avplayer/volume.md">var volume: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-audio-behavior:0102:0001">The audio playback volume for the player.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-audio-behavior:0103:0001"><a href="avplayer/ismuted.md">var isMuted: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-audio-behavior:0104:0001">A Boolean value that indicates whether the audio output of the player is muted.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-audio-behavior:0105:0001"><a href="avplayeritem/allowedaudiospatializationformats.md">var allowedAudioSpatializationFormats: AVAudioSpatializationFormats</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-audio-behavior:0106:0001">The source audio channel layouts the player item supports for spatialization.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-audio-behavior:0107:0001"><a href="avplayeritem/isaudiospatializationallowed.md">var isAudioSpatializationAllowed: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-audio-behavior:0108:0001">A Boolean value that indicates whether the player item allows spatialized audio playback.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-audio-behavior:0109:0001"><a href="avplayer/audiooutputsuppressedduetononmixableaudioroute.md">var audioOutputSuppressedDueToNonMixableAudioRoute: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-audio-behavior:0110:0001">Whether the player’s audio output is suppressed due to being on a non-mixable audio route.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-audio-behavior:0111:0001"><a href="avplayer/intendedspatialaudioexperience-1bd87.md">var intendedSpatialAudioExperience: any SpatialAudioExperience</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-audio-behavior:0112:0001">The player’s intended Spatial Audio experience.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-background-playback:0113:0001">Configuring background playback</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-background-playback:0114:0001"><a href="avplayer/audiovisualbackgroundplaybackpolicy.md">var audiovisualBackgroundPlaybackPolicy: AVPlayerAudiovisualBackgroundPlaybackPolicy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-background-playback:0115:0001">A policy that determines how playback of audiovisual media continues when the app transitions to the background.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-background-playback:0116:0001"><a href="avplayeraudiovisualbackgroundplaybackpolicy.md">enum AVPlayerAudiovisualBackgroundPlaybackPolicy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-background-playback:0117:0001">Policies that describe playback behavior when an app transitions to the background while playing video.</span>

### <span class="ko-segment" data-segment-id="seg:heading:managing-external-playback:0118:0001">Managing external playback</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-external-playback:0119:0001"><a href="avplayer/allowsexternalplayback.md">var allowsExternalPlayback: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-external-playback:0120:0001">A Boolean value that indicates whether the player allows switching to external playback mode.</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-external-playback:0121:0001"><a href="avplayer/isexternalplaybackactive.md">var isExternalPlaybackActive: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-external-playback:0122:0001">A Boolean value that indicates whether the player is currently playing video in external playback mode.</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-external-playback:0123:0001"><a href="avplayer/usesexternalplaybackwhileexternalscreenisactive.md">var usesExternalPlaybackWhileExternalScreenIsActive: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-external-playback:0124:0001">A Boolean value that indicates whether the player should automatically switch to external playback mode while the external screen mode is active.</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-external-playback:0125:0001"><a href="avplayer/externalplaybackvideogravity.md">var externalPlaybackVideoGravity: AVLayerVideoGravity</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-external-playback:0126:0001">The video gravity of the player for external playback mode only.</span>

### <span class="ko-segment" data-segment-id="seg:heading:determining-hdr-playback-eligibility:0127:0001">Determining HDR playback eligibility</span>

- <span class="ko-segment" data-segment-id="seg:list:determining-hdr-playback-eligibility:0128:0001"><a href="avplayer/eligibleforhdrplayback.md">class var eligibleForHDRPlayback: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:determining-hdr-playback-eligibility:0129:0001">A Boolean value that indicates whether the current device can present content to an HDR display.</span>

- <span class="ko-segment" data-segment-id="seg:list:determining-hdr-playback-eligibility:0130:0001"><a href="avplayer/availablehdrmodes.md">class var availableHDRModes: AVPlayer.HDRMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:determining-hdr-playback-eligibility:0131:0001">The HDR modes that are available for playback.</span>

- <span class="ko-segment" data-segment-id="seg:list:determining-hdr-playback-eligibility:0132:0001"><a href="avplayer/hdrmode.md">AVPlayer.HDRMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:determining-hdr-playback-eligibility:0133:0001">A bitfield type that specifies an HDR mode.</span>

- <span class="ko-segment" data-segment-id="seg:list:determining-hdr-playback-eligibility:0134:0001"><a href="avplayer/eligibleforhdrplaybackdidchangenotification.md">class let eligibleForHDRPlaybackDidChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:determining-hdr-playback-eligibility:0135:0001">A notification that’s posted whenever HDR playback eligibility changes.</span>

### <span class="ko-segment" data-segment-id="seg:heading:coordinating-playback:0136:0001">Coordinating playback</span>

- <span class="ko-segment" data-segment-id="seg:list:coordinating-playback:0137:0001"><a href="avplayer/playbackcoordinator.md">var playbackCoordinator: AVPlayerPlaybackCoordinator</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:coordinating-playback:0138:0001">The playback coordinator for the player.</span>

### <span class="ko-segment" data-segment-id="seg:heading:synchronizing-multiple-players:0139:0001">Synchronizing multiple players</span>

- <span class="ko-segment" data-segment-id="seg:list:synchronizing-multiple-players:0140:0001"><a href="avplayer/setrate(_:time:athosttime:">func setRate(Float, time: CMTime, atHostTime: CMTime)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:synchronizing-multiple-players:0141:0001">Synchronizes the playback rate and time of the current item with an external source.</span>

- <span class="ko-segment" data-segment-id="seg:list:synchronizing-multiple-players:0142:0001"><a href="avplayer/preroll(atrate:completionhandler:">func preroll(atRate: Float, completionHandler: ((Bool) -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:synchronizing-multiple-players:0143:0001">Begins loading media data to prime the media pipelines for playback.</span>

- <span class="ko-segment" data-segment-id="seg:list:synchronizing-multiple-players:0144:0001"><a href="avplayer/cancelpendingprerolls.md">func cancelPendingPrerolls()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:synchronizing-multiple-players:0145:0001">Cancels any pending preroll requests and invokes the corresponding completion handlers, if present.</span>

- <span class="ko-segment" data-segment-id="seg:list:synchronizing-multiple-players:0146:0001"><a href="avplayer/sourceclock.md">var sourceClock: CMClock?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:synchronizing-multiple-players:0147:0001">A clock the player uses for item time bases.</span>

- <span class="ko-segment" data-segment-id="seg:list:synchronizing-multiple-players:0148:0001"><a href="avplayer/masterclock.md">var masterClock: CMClock?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:synchronizing-multiple-players:0149:0001">The host clock for item time bases.</span>

### <span class="ko-segment" data-segment-id="seg:heading:preventing-sleep-and-backgrounding:0150:0001">Preventing sleep and backgrounding</span>

- <span class="ko-segment" data-segment-id="seg:list:preventing-sleep-and-backgrounding:0151:0001"><a href="avplayer/preventsdisplaysleepduringvideoplayback.md">var preventsDisplaySleepDuringVideoPlayback: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:preventing-sleep-and-backgrounding:0152:0001">A Boolean value that indicates whether video playback prevents display and device sleep.</span>

- <span class="ko-segment" data-segment-id="seg:list:preventing-sleep-and-backgrounding:0153:0001"><a href="avplayer/preventsautomaticbackgroundingduringvideoplayback.md">var preventsAutomaticBackgroundingDuringVideoPlayback: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:preventing-sleep-and-backgrounding:0154:0001">A Boolean value that indicates whether video playback prevents the system from automatically backgrounding the app.</span>

### <span class="ko-segment" data-segment-id="seg:heading:determining-content-protections:0155:0001">Determining content protections</span>

- <span class="ko-segment" data-segment-id="seg:list:determining-content-protections:0156:0001"><a href="avplayer/isoutputobscuredduetoinsufficientexternalprotection.md">var isOutputObscuredDueToInsufficientExternalProtection: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:determining-content-protections:0157:0001">A Boolean value that indicates whether output is being obscured because of insufficient external protection.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-audio-and-video-devices:0158:0001">Configuring audio and video devices</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-audio-and-video-devices:0159:0001"><a href="avplayer/audiooutputdeviceuniqueid.md">var audioOutputDeviceUniqueID: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-audio-and-video-devices:0160:0001">Specifies the unique ID of the Core Audio output device used to play audio.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-audio-and-video-devices:0161:0001"><a href="avplayer/preferredvideodecodergpuregistryid.md">var preferredVideoDecoderGPURegistryID: UInt64</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-audio-and-video-devices:0162:0001">The registry identifier for the GPU used for video decoding.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-the-network-resource-priority:0163:0001">Configuring the network resource priority</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-the-network-resource-priority:0164:0001"><a href="avplayer/networkresourcepriority-swift.property.md">var networkResourcePriority: AVPlayer.NetworkResourcePriority</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-the-network-resource-priority:0165:0001">Indicates the priority of this player for network bandwidth resource distribution.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-the-network-resource-priority:0166:0001"><a href="avplayer/networkresourcepriority-swift.enum.md">AVPlayer.NetworkResourcePriority</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-the-network-resource-priority:0167:0001">This defines the network resource priority for a player.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-observation:0168:0001">Configuring observation</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-observation:0169:0001"><a href="avplayer/isobservationenabled.md">class var isObservationEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-observation:0170:0001">AVPlayer and other AVFoundation types can optionally be observed using Swift Observation.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-airplay-behavior:0171:0001">Configuring AirPlay behavior</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-airplay-behavior:0172:0001"><a href="avplayer/allowsairplayvideo.md">var allowsAirPlayVideo: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-airplay-behavior:0173:0001">A Boolean value that indicates whether the player allows AirPlay video playback.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-airplay-behavior:0174:0001"><a href="avplayer/isairplayvideoactive.md">var isAirPlayVideoActive: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-airplay-behavior:0175:0001">A Boolean value that indicates whether the player is playing video through AirPlay.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-airplay-behavior:0176:0001"><a href="avplayer/usesairplayvideowhileairplayscreenisactive.md">var usesAirPlayVideoWhileAirPlayScreenIsActive: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-airplay-behavior:0177:0001">A Boolean value that indicates whether the player automatically switches to AirPlay Video while AirPlay Screen is active.</span>

### <span class="ko-segment" data-segment-id="seg:heading:displaying-closed-captions:0178:0001">Displaying closed captions</span>

- <span class="ko-segment" data-segment-id="seg:list:displaying-closed-captions:0179:0001"><a href="avplayer/isclosedcaptiondisplayenabled.md">var isClosedCaptionDisplayEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:displaying-closed-captions:0180:0001">A Boolean value that indicates whether the player uses closed captioning.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0181:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0182:0001"><a href="avplayer/init(url:">convenience init(URL: URL)</a>-8aqw0.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:initializers:0182:0002"><a href="avplayer/init(url:">init(URL: URL)</a>-9cqj1.md)</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0183:0001">Instance Properties</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0184:0001"><a href="avplayer/allowscaptureofclearkeyvideo.md">var allowsCaptureOfClearKeyVideo: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0185:0001">Indicates whether the video output of ClearKey Encrypted Video can be captured</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0186:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0187:0001">Inherits From</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0188:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:inherited-by:0189:0001">Inherited By</span>

- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0190:0001"><a href="avqueueplayer.md">AVQueuePlayer</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0191:0001">Conforms To</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0192:0001"><a href="../AVRouting/AVRoutingPlaybackParticipant.md">AVRoutingPlaybackParticipant</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0192:0002"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0192:0003"><a href="../Swift/Copyable.md">Copyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0192:0004"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0192:0005"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0192:0006"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0192:0007"><a href="../Swift/Escapable.md">Escapable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0192:0008"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0192:0009"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0192:0010"><a href="../Observation/Observable.md">Observable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0192:0011"><a href="../Swift/Sendable.md">Sendable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0193:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0194:0001"><a href="observing-playback-state-in-swiftui.md">Observing playback state in SwiftUI</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0195:0001">Keep your user interface in sync with state changes from playback objects.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0196:0001"><a href="controlling-the-transport-behavior-of-a-player.md">Controlling the transport behavior of a player</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0197:0001">Play, pause, and seek through a media presentation.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0198:0001"><a href="creating-a-seamless-multiview-playback-experience.md">Creating a seamless multiview playback experience</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0199:0001">Build advanced multiview playback experiences with the AVFoundation and AVRouting frameworks.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0200:0001"><a href="avplayeritem.md">class AVPlayerItem</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0201:0001">An object that models the timing and presentation state of an asset during playback.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0202:0001"><a href="avplayeritemtrack.md">class AVPlayerItemTrack</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0203:0001">An object that represents the presentation state of an asset track during playback.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0204:0001"><a href="avqueueplayer.md">class AVQueuePlayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0205:0001">An object that plays a sequence of player items.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0206:0001"><a href="avplayerlooper.md">class AVPlayerLooper</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0207:0001">An object that loops media content using a queue player.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0209:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayer">View on Apple Developer</a>*</span>
