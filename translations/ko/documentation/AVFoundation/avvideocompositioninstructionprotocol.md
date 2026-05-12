---
source_path: "documentation/AVFoundation/avvideocompositioninstructionprotocol.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideocompositioninstructionprotocol"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avvideocompositioninstructionprotocol:0000:0001">AVVideoCompositionInstructionProtocol</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideocompositioninstructionprotocol:0001:0001">**Framework**: AVFoundation **Kind**: protocol</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideocompositioninstructionprotocol:0002:0001">비디오 컴포지션 지시문의 인터페이스를 정의하는 프로토콜입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideocompositioninstructionprotocol:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avvideocompositioninstructionprotocol:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideocompositioninstructionprotocol:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideocompositioninstructionprotocol:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideocompositioninstructionprotocol:0004:0004">macOS 10.9+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideocompositioninstructionprotocol:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideocompositioninstructionprotocol:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
protocol AVVideoCompositionInstructionProtocol : NSObjectProtocol, Sendable
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">비디오 컴포지션은 내용 구성 방법을 설명하는 지시문 배열을 유지합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-track-id-settings:0010:0001">트랙 ID 설정 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-track-id-settings:0011:0001"><a href="avvideocompositioninstructionprotocol/passthroughtrackid.md">var passthroughTrackID: CMPersistentTrackID</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-track-id-settings:0012:0001">합성하지 않고 그대로 통과할 소스 트랙의 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-track-id-settings:0013:0001">[var requiredSourceTrackIDs: [NSValue]?](avvideocompositioninstructionprotocol/requiredsourcetrackids.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-track-id-settings:0014:0001">프레임을 구성하기 위해 지시문에 필요한 비디오 트랙의 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-track-id-settings:0015:0001">[var requiredSourceSampleDataTrackIDs: [NSNumber]](avvideocompositioninstructionprotocol/requiredsourcesampledatatrackids.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-track-id-settings:0016:0001">프레임을 구성하기 위해 지시문에 필요한 샘플 데이터 트랙의 식별자입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-tweening-settings:0017:0001">트위닝 설정 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-tweening-settings:0018:0001"><a href="avvideocompositioninstructionprotocol/containstweening.md">var containsTweening: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-tweening-settings:0019:0001">컴포지션에 트위닝이 포함되어 있는지 나타내는 부울 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-post-processing-status:0020:0001">후처리 상태 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-post-processing-status:0021:0001"><a href="avvideocompositioninstructionprotocol/enablepostprocessing.md">var enablePostProcessing: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-post-processing-status:0022:0001">컴포지션이 후처리를 사용하도록 설정되어 있는지 나타내는 부울 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-timing-settings:0023:0001">타이밍 설정 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-timing-settings:0024:0001"><a href="avvideocompositioninstructionprotocol/timerange.md">var timeRange: CMTimeRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-timing-settings:0025:0001">지시문이 적용되는 시간 범위입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0026:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0027:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0028:0001"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0028:0002"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0028:0003"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforming-types:0029:0001">준수 유형</span>

- <span class="ko-segment" data-segment-id="seg:list:conforming-types:0030:0001"><a href="avmutablevideocompositioninstruction.md">AVMutableVideoCompositionInstruction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforming-types:0030:0002"><a href="avvideocompositioninstruction-swift.class.md">AVVideoCompositionInstruction</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0031:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001">[var instructions: [any AVVideoCompositionInstructionProtocol]](avmutablevideocomposition/instructions.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">비디오 컴포지션 지시문입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocompositioninstructionprotocol">View on Apple Developer</a>*</span>
