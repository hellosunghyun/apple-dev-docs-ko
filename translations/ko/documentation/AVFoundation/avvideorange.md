---
source_path: "documentation/AVFoundation/avvideorange.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideorange"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avvideorange:0000:0001">AVVideoRange</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideorange:0001:0001">**Framework**: AVFoundation **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideorange:0002:0001">비디오 변형의 동적 범위를 설명하는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideorange:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avvideorange:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideorange:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideorange:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideorange:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideorange:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideorange:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideorange:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct AVVideoRange
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:video-ranges:0008:0001">비디오 범위</span>

- <span class="ko-segment" data-segment-id="seg:list:video-ranges:0009:0001"><a href="avvideorange/pq.md">static let pq: AVVideoRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:video-ranges:0010:0001">감각량자화(PQ) 기반 고동적범위(HDR) 비디오를 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:video-ranges:0011:0001"><a href="avvideorange/hlg.md">static let hlg: AVVideoRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:video-ranges:0012:0001">하이브리드 로그 감마(HLG) 기반 고동적범위(HDR) 비디오를 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:video-ranges:0013:0001"><a href="avvideorange/sdr.md">static let sdr: AVVideoRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:video-ranges:0014:0001">SDR(표준 동적 범위) 비디오를 나타냅니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0015:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0016:0001"><a href="avvideorange/init(rawvalue:">init(rawValue: String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0017:0001">문자열로 비디오 범위를 생성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0018:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0019:0001">준수 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0001"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0002"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0003"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0004"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0005"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0021:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[var codecTypes: [CMVideoCodecType]](avassetvariant/videoattributes-swift.class/codectypes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">변형의 렌디션에 포함된 비디오 샘플 코덱 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avassetvariant/videoattributes-swift.class/nominalframerate.md">var nominalFrameRate: Double?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">변형의 렌디션의 공칭 프레임 레이트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avassetvariant/videoattributes-swift.class/presentationsize.md">var presentationSize: CGSize</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">변형의 렌디션의 표시 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avassetvariant/videoattributes-swift.class/videorange.md">var videoRange: AVVideoRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">변형의 비디오 범위입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001">[var videoLayoutAttributes: [AVAssetVariant.VideoAttributes.LayoutAttributes]](avassetvariant/videoattributes-swift.class/videolayoutattributes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">비디오 콘텐츠의 레이아웃을 설명하는 속성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avassetvariant/videoattributes-swift.class/layoutattributes.md">AVAssetVariant.VideoAttributes.LayoutAttributes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">비디오 콘텐츠의 레이아웃을 설명하는 속성입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideorange">View on Apple Developer</a>*</span>
