---
source_path: "documentation/ARKit/arconfiguration/framesemantics-swiftstruct.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arconfiguration/framesemantics-swiftstruct"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:arconfigurationframesemantics:0000:0001">ARConfiguration.FrameSemantics</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arconfigurationframesemantics:0001:0001">**Framework**: ARKit **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arconfigurationframesemantics:0002:0001">앱에서 활성화할 수 있는 선택적 frame feature의 유형입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arconfigurationframesemantics:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:arconfigurationframesemantics:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:arconfigurationframesemantics:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:arconfigurationframesemantics:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct FrameSemantics
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The default value of this property is <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_0@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-feature:0010:0001">기능 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-feature:0011:0001"><a href="arconfiguration/framesemantics-swift.struct/init(rawvalue:">init(rawValue: UInt)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-feature:0012:0001">frame semantics 기능을 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:tracking-bodies-in-2d:0013:0001">2D 바디 추적</span>

- <span class="ko-segment" data-segment-id="seg:list:tracking-bodies-in-2d:0014:0001"><a href="arconfiguration/framesemantics-swift.struct/bodydetection.md">static var bodyDetection: ARConfiguration.FrameSemantics</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:tracking-bodies-in-2d:0015:0001">2D 바디 감지가 활성화됨을 나타내는 옵션입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:occluding-virtual-content-with-people:0016:0001">사람을 사용한 가상 콘텐츠 가리기</span>

- <span class="ko-segment" data-segment-id="seg:list:occluding-virtual-content-with-people:0017:0001"><a href="arconfiguration/framesemantics-swift.struct/personsegmentation.md">static var personSegmentation: ARConfiguration.FrameSemantics</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:occluding-virtual-content-with-people:0018:0001">앱의 가상 콘텐츠를 사람이 가리는지 나타내는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:occluding-virtual-content-with-people:0019:0001"><a href="arconfiguration/framesemantics-swift.struct/personsegmentationwithdepth.md">static var personSegmentationWithDepth: ARConfiguration.FrameSemantics</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:occluding-virtual-content-with-people:0020:0001">깊이 값에 따라 앱의 가상 콘텐츠를 사람이 가리는지 나타내는 옵션입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-depth:0021:0001">깊이 액세스</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-depth:0022:0001"><a href="arconfiguration/framesemantics-swift.struct/scenedepth.md">static var sceneDepth: ARConfiguration.FrameSemantics</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-depth:0023:0001">카메라를 통해 본 실제 세계 객체와 장치 간 거리를 제공하는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-depth:0024:0001"><a href="arconfiguration/framesemantics-swift.struct/smoothedscenedepth.md">static var smoothedSceneDepth: ARConfiguration.FrameSemantics</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-depth:0025:0001">여러 프레임에 걸쳐 평균화된 실제 세계 객체와 장치 간 거리를 제공하는 옵션입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0026:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0027:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0003"><a href="../Swift/ExpressibleByArrayLiteral.md">ExpressibleByArrayLiteral</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0004"><a href="../Swift/OptionSet.md">OptionSet</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0005"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0006"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0007"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0008"><a href="../Swift/SetAlgebra.md">SetAlgebra</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0029:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="arconfiguration/framesemantics-swift.property.md">var frameSemantics: ARConfiguration.FrameSemantics</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">프레임에서 활성화된 semantics의 집합입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="arconfiguration/supportsframesemantics(_:">class func supportsFrameSemantics(ARConfiguration.FrameSemantics) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">특정 기능이 지원되는지 확인합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/arkit/arconfiguration/framesemantics-swift.struct">View on Apple Developer</a>*</span>
