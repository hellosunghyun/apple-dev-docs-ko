---
source_path: "documentation/AVFoundation/avcapturetimecodegenerator/synchronizationtimeout.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator/synchronizationtimeout"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:synchronizationtimeout:0000:0001">synchronizationTimeout</span>

<span class="ko-segment" data-segment-id="seg:paragraph:synchronizationtimeout:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:synchronizationtimeout:0002:0001">타임아웃되기 전 소스 동기화 시도에서 허용되는 최대 시간 간격입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:synchronizationtimeout:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:synchronizationtimeout:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:synchronizationtimeout:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:synchronizationtimeout:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:synchronizationtimeout:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:synchronizationtimeout:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var synchronizationTimeout: TimeInterval { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 시간 코드 소스와 동기화할 수 없을 때, <a href="avcapturetimecodegenerator.md">@@TOKEN_0@@</a>가 동기화 시도를 중단 없이 계속하다가 타임아웃되기 전까지 허용되는 기간(초)을 지정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 임계값이 초과되면 동기화 상태가 타임아웃을 반영하도록 업데이트되고, <a href="avcapturetimecodegeneratordelegate/timecodegenerator(_:transitionedto:for:">@@TOKEN_0@@</a>.md) 대리자 메서드가 호출되어 해당 이벤트를 알려줍니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">기본값은 15초입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturetimecodegenerator/timecodealignmentoffset.md">var timecodeAlignmentOffset: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">생성된 시간 코드에 적용되는 시간 오프셋(초)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturetimecodegenerator/timecodeframeduration.md">var timecodeFrameDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">생성기가 시간 코드를 생성할 때 사용할 프레임 지속 기간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="averror-swift.struct/airplayreceivertemporarilyunavailable.md">func setDelegate((any AVCaptureTimecodeGeneratorDelegate)?, queue: dispatch_queue_t?)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">실시간 시간 코드 업데이트를 수신할 대리자를 지정하고 콜백에 사용할 큐를 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator/synchronizationtimeout">View on Apple Developer</a>*</span>
