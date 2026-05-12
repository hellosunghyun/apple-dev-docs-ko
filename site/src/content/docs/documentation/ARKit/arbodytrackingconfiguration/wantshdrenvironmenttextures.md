---
source_path: "documentation/ARKit/arbodytrackingconfiguration/wantshdrenvironmenttextures.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arbodytrackingconfiguration/wantshdrenvironmenttextures"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:wantshdrenvironmenttextures:0000:0001">wantsHDREnvironmentTextures</span>

<span class="ko-segment" data-segment-id="seg:paragraph:wantshdrenvironmenttextures:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:wantshdrenvironmenttextures:0002:0001">ARKit이 환경 텍스처를 HDR 형식으로 생성하도록 지시하는 플래그입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:wantshdrenvironmenttextures:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:wantshdrenvironmenttextures:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:wantshdrenvironmenttextures:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:wantshdrenvironmenttextures:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var wantsHDREnvironmentTextures: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">기본값은 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">렌더러가 HDR 환경 텍스처를 지원하면 이 기능은 더 사실적인 반사를 렌더링합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">!<a href="https://docs-assets.developer.apple.com/published/ad953b8a0aa6dd1314efee5175eab5df/media-3281347%402x.png">Screenshot showing low and high dynamic range environment textures in a side by side comparison.</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Each key in the <code>blendShapes</code> dictionary is an <a href="arfaceanchor/blendshapelocation.md">@@TOKEN_1@@</a> constant identifying a facial feature.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">The corresponding value is the position of that feature relative to its neutral configuration, ranging from <code>0.0</code> (neutral) to <code>1.0</code> (maximum movement).</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arbodytrackingconfiguration/environmenttexturing.md">var environmentTexturing: ARWorldTrackingConfiguration.EnvironmentTexturing</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">ARKit가 환경 텍스처를 생성할 때 사용하는 동작입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/arkit/arbodytrackingconfiguration/wantshdrenvironmenttextures">View on Apple Developer</a>*</span>
