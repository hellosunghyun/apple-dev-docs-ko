---
source_path: "documentation/AVFoundation/media-playback.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/media-playback"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:media-playback:0000:0001">미디어 재생</span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-playback:0001:0001">**Framework**: AVFoundation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-playback:0002:0001">미디어 자산과 인터스티셜 콘텐츠의 재생을 인터페이스에서 해당 콘텐츠를 표시하는 방식과 독립적으로 관리합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">플레이어를 사용해 미디어 자산의 재생과 타이밍(시작, 중지, 특정 시점으로의 탐색)을 관리할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0002">플레이어는 한 번에 하나의 미디어 자산만 재생을 관리합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0003">이 framework는 미디어 자산을 차례대로 재생하도록 큐에 넣어 순차 재생하는 queue player도 제공합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0005:0001">**Note**: AVFoundation을 사용할 때 Apple은 framework 개선에 도움이 되도록 메트릭을 수집할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">미디어 자산을 재생하려면 <a href="avplayeritem.md">@@TOKEN_0@@</a> 인스턴스를 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0002">player item은 플레이어가 재생하는 자산의 타이밍과 표시 상태를 관리합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0003">player item에는 자산의 트랙에 해당하는 player item track도 포함됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0004">플레이어 출력을 특수 Core Animation layer, player layer 또는 synchronized layer로 전달합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0007:0001">❗ **Important**: 앱이 ProRes 및 ProRes RAW 비디오 파일의 Afterburner 가속 재생과 디코딩이 필요할 경우 <a href="https://developer.apple.com/documentation/VideoToolbox/VTRegisterProfessionalVideoWorkflowVideoDecoders(">@@TOKEN_0@@</a>) 함수를 호출해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0008:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:essentials:0009:0001">Essentials</span>

- <span class="ko-segment" data-segment-id="seg:list:essentials:0010:0001"><a href="configuring-your-app-for-media-playback.md">Configuring your app for media playback</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:essentials:0011:0001">표준 미디어 재생 동작을 활성화하도록 앱을 구성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:playback-control:0012:0001">재생 제어</span>

- <span class="ko-segment" data-segment-id="seg:list:playback-control:0013:0001"><a href="observing-playback-state-in-swiftui.md">Observing playback state in SwiftUI</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:playback-control:0014:0001">재생 객체의 상태 변경에 맞춰 사용자 인터페이스 상태를 동기화합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:playback-control:0015:0001"><a href="controlling-the-transport-behavior-of-a-player.md">Controlling the transport behavior of a player</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:playback-control:0016:0001">미디어 프레젠테이션에서 재생, 일시 중지, 탐색을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:playback-control:0017:0001"><a href="creating-a-seamless-multiview-playback-experience.md">Creating a seamless multiview playback experience</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:playback-control:0018:0001">AVFoundation 및 AVRouting framework로 고급 멀티뷰 재생 경험을 구축합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:playback-control:0019:0001"><a href="avplayer.md">class AVPlayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:playback-control:0020:0001">플레이어의 전송 동작을 제어하는 인터페이스를 제공하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:playback-control:0021:0001"><a href="avplayeritem.md">class AVPlayerItem</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:playback-control:0022:0001">재생 중 자산의 타이밍과 표시 상태를 모델링하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:playback-control:0023:0001"><a href="avplayeritemtrack.md">class AVPlayerItemTrack</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:playback-control:0024:0001">재생 중 자산 트랙의 표시 상태를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:playback-control:0025:0001"><a href="avqueueplayer.md">class AVQueuePlayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:playback-control:0026:0001">player item 시퀀스를 재생하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:playback-control:0027:0001"><a href="avplayerlooper.md">class AVPlayerLooper</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:playback-control:0028:0001">queue player를 사용해 미디어 콘텐츠를 반복 재생하는 객체입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:shareplay:0029:0001">SharePlay</span>

- <span class="ko-segment" data-segment-id="seg:list:shareplay:0030:0001"><a href="../visionOS/destination-video.md">Destination Video</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:shareplay:0031:0001">SwiftUI를 활용해 멀티플랫폼 앱에서 몰입형 미디어 경험을 구축합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:shareplay:0032:0001"><a href="supporting-coordinated-media-playback.md">Supporting coordinated media playback</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:shareplay:0033:0001">기기 간에 시청 및 청취를 지원하는 동기화된 미디어 경험을 만듭니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:shareplay:0034:0001"><a href="avplaybackcoordinator.md">class AVPlaybackCoordinator</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:shareplay:0035:0001">연결된 그룹에서 플레이어 재생을 조정하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:shareplay:0036:0001"><a href="avplayerplaybackcoordinator.md">class AVPlayerPlaybackCoordinator</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:shareplay:0037:0001">연결된 그룹에서 player 객체의 재생을 조정하는 playback coordinator 하위 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:shareplay:0038:0001"><a href="avdelegatingplaybackcoordinator.md">class AVDelegatingPlaybackCoordinator</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:shareplay:0039:0001">연결된 그룹에서 사용자 지정 player 객체의 재생을 조정하는 playback coordinator 하위 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:shareplay:0040:0001"><a href="avplaybackcoordinationmedium.md">class AVPlaybackCoordinationMedium</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:presentation:0041:0001">Presentation</span>

- <span class="ko-segment" data-segment-id="seg:list:presentation:0042:0001"><a href="monitoring-playback-progress-in-your-app.md">Monitoring playback progress in your app</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:presentation:0043:0001">미디어 자산의 재생을 관찰하여 앱의 사용자 인터페이스 상태를 업데이트합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:presentation:0044:0001"><a href="using-hevc-video-with-alpha.md">Using HEVC video with alpha</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:presentation:0045:0001">알파 채널이 있는 HEVC 비디오를 재생하고, 쓰고, 내보내어 비디오 처리에 오버레이 효과를 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:presentation:0046:0001"><a href="avplayerlayer.md">class AVPlayerLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:presentation:0047:0001">player 객체의 시각적 콘텐츠를 표시하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:presentation:0048:0001"><a href="avsynchronizedlayer.md">class AVSynchronizedLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:presentation:0049:0001">player item에서 타이밍을 파생해 레이어 애니메이션을 미디어 재생과 동기화할 수 있는 Core Animation layer입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:media-selection:0050:0001">미디어 선택</span>

- <span class="ko-segment" data-segment-id="seg:list:media-selection:0051:0001"><a href="selecting-subtitles-and-alternative-audio-tracks.md">Selecting subtitles and alternative audio tracks</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-selection:0052:0001">사용자의 기본 언어로 자막과 대체 오디오 트랙을 추가해 앱의 사용자 접근성을 높일 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:media-selection:0053:0001"><a href="avmediaselection.md">class AVMediaSelection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-selection:0054:0001">자산의 미디어 선택 옵션 전체를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:media-selection:0055:0001"><a href="avmediaselectiongroup.md">class AVMediaSelectionGroup</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-selection:0056:0001">자산 내 미디어 표시를 위한 상호 배타적 옵션 컬렉션을 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:media-selection:0057:0001"><a href="avmediaselectionoption.md">class AVMediaSelectionOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-selection:0058:0001">옵션 그룹에서 미디어 표시를 위해 특정 옵션을 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:media-selection:0059:0001"><a href="avmutablemediaselection.md">class AVMutableMediaSelection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-selection:0060:0001">자산의 미디어 선택 옵션 전체를 나타내는 변경 가능한 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:media-selection:0061:0001"><a href="avplayermediaselectioncriteria.md">class AVPlayerMediaSelectionCriteria</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-selection:0062:0001">플레이어에 대한 기본 언어와 미디어 특성을 지정하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:media-selection:0063:0001"><a href="avcustommediaselectionscheme.md">class AVCustomMediaSelectionScheme</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-selection:0064:0001">AVMediaSelectionOptions에 대한 대체 선택 인터페이스 제공을 목적으로 제작된 콘텐츠의 경우, AVCustomMediaSelectionScheme은 미디어 표시를 제어하기 위한 사용자 지정 설정 컬렉션을 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:media-selection:0065:0001"><a href="avmediapresentationselector.md">class AVMediaPresentationSelector</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-selection:0066:0001">AVMediaSelectionOptions에 대한 대체 선택 인터페이스 제공을 목적으로 제작된 콘텐츠의 경우, AVMediaPresentationSelector는 미디어 표시를 제어하는 상호 배타적 설정 컬렉션을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:media-selection:0067:0001"><a href="avmediapresentationsetting.md">class AVMediaPresentationSetting</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-selection:0068:0001">AVMediaSelectionOptions에 대한 대체 선택 인터페이스 제공을 목적으로 제작된 콘텐츠의 경우, AVMediaPresentationSetting은 미디어 표시를 제어하는 선택 가능한 설정을 나타냅니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:interstitials:0069:0001">Interstitials</span>

- <span class="ko-segment" data-segment-id="seg:list:interstitials:0070:0001"><a href="providing-an-integrated-view-of-your-timeline-when-playing-hls-interstitials.md">Providing an integrated view of your timeline when playing HLS interstitials</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:interstitials:0071:0001">point and fill occupancy HLS interstitials로 단순 광고 삽입을 넘어선 기능을 구현합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:interstitials:0072:0001"><a href="avplayerinterstitialevent.md">class AVPlayerInterstitialEvent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:interstitials:0073:0001">플레이어가 interstitial 콘텐츠를 표시하는 방식을 지정하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:interstitials:0074:0001"><a href="avplayerinterstitialeventcontroller.md">class AVPlayerInterstitialEventController</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:interstitials:0075:0001">기본 플레이어에서 재생되는 항목의 interstitial 이벤트를 예약하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:interstitials:0076:0001"><a href="avplayerinterstitialeventmonitor.md">class AVPlayerInterstitialEventMonitor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:interstitials:0077:0001">interstitial 이벤트의 예약 및 진행 상태를 모니터링하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:interstitials:0078:0001"><a href="avplayeritemintegratedtimeline.md">class AVPlayerItemIntegratedTimeline</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:interstitials:0079:0001">주요 player item과 예약된 interstitial 이벤트의 타임라인 및 재생 순서를 모델링하는 객체입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:metrics:0080:0001">Metrics</span>

- <span class="ko-segment" data-segment-id="seg:list:metrics:0081:0001"><a href="avmetrics.md">struct AVMetrics</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:metrics:0082:0001">메트릭 정보를 비동기로 스트리밍하는 정보 흐름입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:metrics:0083:0001"><a href="avmergedmetrics.md">struct AVMergedMetrics</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:metrics:0084:0001">서로 다른 게시자로부터 메트릭 정보를 비동기적으로 스트리밍하는 메트릭입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:metrics:0085:0001"><a href="avvideoperformancemetrics.md">class AVVideoPerformanceMetrics</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:metrics:0086:0001">비디오 재생 품질과 관련된 메트릭을 제공하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:metrics:0087:0001"><a href="avmetriceventstreampublisher.md">protocol AVMetricEventStreamPublisher</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:metrics:0088:0001">이벤트 스트림에 metric 이벤트를 게시하는 객체를 위한 type입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:metrics:0089:0001"><a href="avmetricevent.md">class AVMetricEvent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:metrics:0090:0001">metric event를 나타내는 기본 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:metrics:0091:0001"><a href="avmetricerrorevent.md">class AVMetricErrorEvent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:metrics:0092:0001">오류가 발생할 때 metric event를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:metrics:0093:0001"><a href="metric-event-types.md">Metric event types</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:remote-controls:0094:0001">원격 제어</span>

- <span class="ko-segment" data-segment-id="seg:list:remote-controls:0095:0001"><a href="supporting-remote-interactions-in-tvos.md">Supporting remote interactions in tvOS</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:remote-controls:0096:0001">Set up your app to support remote commands and events in a variety of scenarios by using the relevant approach.</span>

### <span class="ko-segment" data-segment-id="seg:heading:timed-metadata:0097:0001">Timed metadata</span>

- <span class="ko-segment" data-segment-id="seg:list:timed-metadata:0098:0001"><a href="presenting-chapter-markers.md">Presenting chapter markers</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:timed-metadata:0099:0001">Add chapter markers to enable users to quickly navigate your content.</span>

- <span class="ko-segment" data-segment-id="seg:list:timed-metadata:0100:0001"><a href="avmetadatagroup.md">class AVMetadataGroup</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:timed-metadata:0101:0001">A collection of metadata items associated with a timeline segment.</span>

- <span class="ko-segment" data-segment-id="seg:list:timed-metadata:0102:0001"><a href="avtimedmetadatagroup.md">class AVTimedMetadataGroup</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:timed-metadata:0103:0001">A collection of metadata items that are valid for use during a specific time range.</span>

- <span class="ko-segment" data-segment-id="seg:list:timed-metadata:0104:0001"><a href="avmutabletimedmetadatagroup.md">class AVMutableTimedMetadataGroup</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:timed-metadata:0105:0001">A mutable collection of metadata items that are valid for use during a specific time range.</span>

- <span class="ko-segment" data-segment-id="seg:list:timed-metadata:0106:0001"><a href="avdaterangemetadatagroup.md">class AVDateRangeMetadataGroup</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:timed-metadata:0107:0001">A collection of metadata items that are valid for use within a specific date range.</span>

- <span class="ko-segment" data-segment-id="seg:list:timed-metadata:0108:0001"><a href="avmutabledaterangemetadatagroup.md">class AVMutableDateRangeMetadataGroup</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:timed-metadata:0109:0001">A mutable collection of metadata items that are valid for use within a specific range of dates.</span>

- <span class="ko-segment" data-segment-id="seg:list:timed-metadata:0110:0001"><a href="avplayeritemmediadatacollector.md">class AVPlayerItemMediaDataCollector</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:timed-metadata:0111:0001">The abstract base for media data collectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:timed-metadata:0112:0001"><a href="avplayeritemmetadatacollector.md">class AVPlayerItemMetadataCollector</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:timed-metadata:0113:0001">An object used to capture the date range metadata defined for an HTTP Live Streaming asset.</span>

### <span class="ko-segment" data-segment-id="seg:heading:media-output:0114:0001">Media output</span>

- <span class="ko-segment" data-segment-id="seg:list:media-output:0115:0001"><a href="avplayervideooutput.md">class AVPlayerVideoOutput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-output:0116:0001">An object that receives video data from a player object.</span>

- <span class="ko-segment" data-segment-id="seg:list:media-output:0117:0001"><a href="avvideooutputspecification.md">class AVVideoOutputSpecification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-output:0118:0001">An object that specifies the pixel buffer attributes and tag collections handled by a player video output.</span>

- <span class="ko-segment" data-segment-id="seg:list:media-output:0119:0001"><a href="avplayeritemoutput.md">class AVPlayerItemOutput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-output:0120:0001">An abstract class that defines the common interface to output media data from a player item.</span>

- <span class="ko-segment" data-segment-id="seg:list:media-output:0121:0001"><a href="avplayeritemvideooutput.md">class AVPlayerItemVideoOutput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-output:0122:0001">An object that outputs video frames from a player item.</span>

- <span class="ko-segment" data-segment-id="seg:list:media-output:0123:0001"><a href="avplayeritemlegibleoutput.md">class AVPlayerItemLegibleOutput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-output:0124:0001">An object that vends attributed strings for media with a legible characteristic.</span>

- <span class="ko-segment" data-segment-id="seg:list:media-output:0125:0001"><a href="avplayeritemrenderedlegibleoutput.md">class AVPlayerItemRenderedLegibleOutput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-output:0126:0001">A player item output that vends media with a legible characteristic as rendered pixel buffers.</span>

- <span class="ko-segment" data-segment-id="seg:list:media-output:0127:0001"><a href="avrenderedcaptionimage.md">class AVRenderedCaptionImage</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-output:0128:0001">An object that provides a rendered pixel buffer and its position in pixels.</span>

- <span class="ko-segment" data-segment-id="seg:list:media-output:0129:0001"><a href="avplayeritemmetadataoutput.md">class AVPlayerItemMetadataOutput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-output:0130:0001">An object that vends collections of metadata items that a player item’s tracks carry.</span>

- <span class="ko-segment" data-segment-id="seg:list:media-output:0131:0001"><a href="avplayeritemoutputpushdelegate.md">protocol AVPlayerItemOutputPushDelegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-output:0132:0001">A protocol that defines the methods to implement to respond to changes in the media data sequence.</span>

### <span class="ko-segment" data-segment-id="seg:heading:utilities:0133:0001">Utilities</span>

- <span class="ko-segment" data-segment-id="seg:list:utilities:0134:0001"><a href="avassetplaybackassistant.md">class AVAssetPlaybackAssistant</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:utilities:0135:0001">An object that provides playback information for an asset.</span>

- <span class="ko-segment" data-segment-id="seg:list:utilities:0136:0001"><a href="avassetplaybackconfigurationoption.md">struct AVAssetPlaybackConfigurationOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:utilities:0137:0001">A structure that defines playback configuration options for an asset.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0138:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0139:0001"><a href="offline-playback-and-storage.md">Offline playback and storage</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0140:0001">Download streamed content to disk to allow offline playback, and define policies to automatically remove downloaded assets.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0141:0001"><a href="streaming-and-airplay.md">Streaming and AirPlay</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0142:0001">Stream content wirelessly to other devices using AirPlay, and handle requests involving FairPlay-protected assets.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0143:0001"><a href="sample-buffer-playback.md">Sample buffer playback</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0144:0001">Create custom controllers to play and synchronize the timing of sample buffer streams.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0146:0001">*<a href="https://developer.apple.com/documentation/avfoundation/media-playback">View on Apple Developer</a>*</span>
