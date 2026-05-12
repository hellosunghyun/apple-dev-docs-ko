---
source_path: "documentation/AVFoundation/avvideoperformancemetrics.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideoperformancemetrics"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avvideoperformancemetrics:0000:0001">AVVideoPerformanceMetrics</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideoperformancemetrics:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideoperformancemetrics:0002:0001">비디오 재생 품질과 관련된 메트릭을 제공하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideoperformancemetrics:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avvideoperformancemetrics:0004:0001">iOS 17.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideoperformancemetrics:0004:0002">iPadOS 17.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideoperformancemetrics:0004:0003">Mac Catalyst 17.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideoperformancemetrics:0004:0004">macOS 14.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideoperformancemetrics:0004:0005">tvOS 17.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideoperformancemetrics:0004:0006">visionOS 1.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVVideoPerformanceMetrics
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-metrics:0008:0001">메트릭 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-metrics:0009:0001"><a href="avvideoperformancemetrics/numberofcorruptedframes.md">var numberOfCorruptedFrames: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-metrics:0010:0001">손상된 프레임의 총 개수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-metrics:0011:0001"><a href="avvideoperformancemetrics/numberofdroppedframes.md">var numberOfDroppedFrames: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-metrics:0012:0001">디코딩 이전 또는 표시 마감 시각 누락으로 인해 시스템이 버린 프레임의 총 개수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-metrics:0013:0001"><a href="avvideoperformancemetrics/numberofframesdisplayedusingoptimizedcompositing.md">var numberOfFramesDisplayedUsingOptimizedCompositing: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-metrics:0014:0001">다른 UI 요소와 합성할 필요가 없는 특수 전력 효율 모드에서 렌더링된 전체 화면 프레임의 총 개수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-metrics:0015:0001"><a href="avvideoperformancemetrics/totalaccumulatedframedelay.md">var totalAccumulatedFrameDelay: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-metrics:0016:0001">표시된 비디오 프레임의 예정된 표시 시각과 실제 표시 시각 간 시간 차이를 누적한 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-metrics:0017:0001"><a href="avvideoperformancemetrics/totalnumberofframes.md">var totalNumberOfFrames: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-metrics:0018:0001">프레임이 손실되지 않을 때 표시되는 프레임의 총 개수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0019:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0020:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0021:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0022:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0007"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0008"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0024:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avmetrics.md">struct AVMetrics</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">메트릭 정보를 비동기적으로 전달하는 스트림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avmergedmetrics.md">struct AVMergedMetrics</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">서로 다른 publisher에서 메트릭 정보를 비동기적으로 제공하는 스트림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avmetriceventstreampublisher.md">protocol AVMetricEventStreamPublisher</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">이벤트 스트림에 metric 이벤트를 게시하는 객체의 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="avmetricevent.md">class AVMetricEvent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">metric 이벤트를 나타내는 기본 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="avmetricerrorevent.md">class AVMetricErrorEvent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">오류가 발생할 때 metric 이벤트를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="metric-event-types.md">Metric event types</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideoperformancemetrics">View on Apple Developer</a>*</span>
