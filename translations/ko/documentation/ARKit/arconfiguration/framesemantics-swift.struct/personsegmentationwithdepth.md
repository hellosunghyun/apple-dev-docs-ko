---
source_path: "documentation/ARKit/arconfiguration/framesemantics-swift.struct/personsegmentationwithdepth.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arconfiguration/framesemantics-swift.struct/personsegmentationwithdepth"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:personsegmentationwithdepth:0000:0001">personSegmentationWithDepth</span>

<span class="ko-segment" data-segment-id="seg:paragraph:personsegmentationwithdepth:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:personsegmentationwithdepth:0002:0001">사람의 깊이에 따라 앱의 가상 콘텐츠를 가려야 함을 나타내는 옵션입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:personsegmentationwithdepth:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:personsegmentationwithdepth:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:personsegmentationwithdepth:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:personsegmentationwithdepth:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var personSegmentationWithDepth: ARConfiguration.FrameSemantics { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><a href="arconfiguration/framesemantics-swift.struct/personsegmentationwithdepth.md">@@TOKEN_0@@</a> 프레임 시맨틱은 카메라 피드에서 ARKit이 감지한 사람을 장면의 깊이에 따라 가상 콘텐츠를 가리도록 지정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 옵션이 활성화되면 ARKit은 <a href="arframe/estimateddepthdata.md">@@TOKEN_0@@</a> 및 <a href="arframe/segmentationbuffer.md">@@TOKEN_1@@</a> 속성을 설정하여 사람 가림 처리의 기반으로 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">표준 렌더러(<a href="https://developer.apple.com/documentation/RealityKit/ARView">@@TOKEN_0@@</a>, and <a href="arscnview.md">@@TOKEN_1@@</a>)는 해당 속성을 사용해 사람 가림 처리를 구현합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">자세한 내용은 <a href="arconfiguration/framesemantics-swift.property.md">@@TOKEN_0@@</a>에서 확인합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">추가 참조</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="arconfiguration/framesemantics-swift.struct/personsegmentation.md">static var personSegmentation: ARConfiguration.FrameSemantics</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">사람이 앱의 가상 콘텐츠를 가려야 함을 나타내는 옵션입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">*<a href="https://developer.apple.com/documentation/arkit/arconfiguration/framesemantics-swift.struct/personsegmentationwithdepth">View on Apple Developer</a>*</span>
