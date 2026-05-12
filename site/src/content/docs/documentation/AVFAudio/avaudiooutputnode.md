---
source_path: "documentation/AVFAudio/avaudiooutputnode.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiooutputnode"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiooutputnode:0000:0001">AVAudioOutputNode</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiooutputnode:0001:0001">**Framework**: AVFAudio **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiooutputnode:0002:0001">시스템의 오디오 출력에 연결되는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiooutputnode:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiooutputnode:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiooutputnode:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiooutputnode:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiooutputnode:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiooutputnode:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiooutputnode:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiooutputnode:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAudioOutputNode
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">The effect of this message depends on the <a href="avmusictrack.md">@@TOKEN_0@@</a> destination audio unit.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">이 노드는 엔진이 수동 렌더링 모드일 때 client의 요청에 따라 출력을 수행합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">이 오디오 노드는 요소가 하나입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002">출력 scope의 형식은 다음을 반영합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:overview:0010:0001">하드웨어에 연결될 때의 오디오 하드웨어 샘플 레이트와 채널 수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0010:0002">엔진의 수동 렌더링 모드 출력 형식(참조 <a href="avaudioengine/manualrenderingformat.md">@@TOKEN_0@@</a>)입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0001">입력 scope의 형식은 초기에는 출력과 동일하지만 다른 형식으로 설정할 수 있으며, 이 경우 오디오 노드가 변환합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0012:0001">❗ **중요**: 이 class에는 자체 method가 없습니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0012:0002">기본 class에서 정의한 method를 override합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0013:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-the-spatial-audio-experience:0014:0001">Spatial Audio 환경 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-the-spatial-audio-experience:0015:0001"><a href="avaudiooutputnode/intendedspatialexperience-3ts59.md">var intendedSpatialExperience: any SpatialAudioExperience</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-the-spatial-audio-experience:0016:0001">이 출력 node의 의도된 spatial experience입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0017:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0018:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0019:0001"><a href="avaudioionode.md">AVAudioIONode</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0020:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0022:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avaudionode.md">class AVAudioNode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">오디오 생성, 처리 또는 I/O block에 사용하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avaudioinputnode.md">class AVAudioInputNode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">시스템의 오디오 입력에 연결되는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avaudioionode.md">class AVAudioIONode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">엔진에서 오디오 입력 또는 출력을 수행하는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiooutputnode">View on Apple Developer</a>*</span>
