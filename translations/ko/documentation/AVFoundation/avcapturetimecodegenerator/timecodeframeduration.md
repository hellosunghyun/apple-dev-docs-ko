---
source_path: "documentation/AVFoundation/avcapturetimecodegenerator/timecodeframeduration.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator/timecodeframeduration"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:timecodeframeduration:0000:0001">timecodeFrameDuration</span>

<span class="ko-segment" data-segment-id="seg:paragraph:timecodeframeduration:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:timecodeframeduration:0002:0001">generator가 timecode를 생성할 때 사용하는 프레임 지속 시간입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:timecodeframeduration:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:timecodeframeduration:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:timecodeframeduration:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:timecodeframeduration:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:timecodeframeduration:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:timecodeframeduration:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var timecodeFrameDuration: CMTime { get set }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avcapturetimecodegenerator/synchronizationtimeout.md">var synchronizationTimeout: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">소스 동기화 시도에서 타임아웃되기 전 허용되는 최대 시간 간격입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturetimecodegenerator/timecodealignmentoffset.md">var timecodeAlignmentOffset: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">생성된 timecode에 초 단위로 적용되는 시간 오프셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturetimecodegenerator/setdelegate(_:queue:">func setDelegate((any AVCaptureTimecodeGeneratorDelegate)?, queue: dispatch_queue_t?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">실시간 타임코드 업데이트를 수신할 대리자를 할당하고 콜백에 사용할 큐를 지정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator/timecodeframeduration">View on Apple Developer</a>*</span>
