---
source_path: "documentation/ARKit/arimageanchor/estimatedscalefactor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arimageanchor/estimatedscalefactor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:estimatedscalefactor:0000:0001">estimatedScaleFactor</span>

<span class="ko-segment" data-segment-id="seg:paragraph:estimatedscalefactor:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:estimatedscalefactor:0002:0001">초기 크기와 추정된 물리적 크기 사이의 계수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:estimatedscalefactor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:estimatedscalefactor:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:estimatedscalefactor:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:estimatedscalefactor:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var estimatedScaleFactor: CGFloat { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The framework clamps this to between <code>0</code> and <code>30</code> Hz.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">반대로 <code>estimatedScaleFactor</code>가 1.0이 아닌 값이면 ARKit가 이미지 앵커의 transform을 자동으로 보정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">이 보정은 다시 ARKit가 물리적 환경에서 이미지 앵커의 위치를 인식하는 방식을 정정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">참조: <a href="arworldtrackingconfiguration/automaticimagescaleestimationenabled.md">@@TOKEN_0@@</a>.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">*<a href="https://developer.apple.com/documentation/arkit/arimageanchor/estimatedscalefactor">View on Apple Developer</a>*</span>
