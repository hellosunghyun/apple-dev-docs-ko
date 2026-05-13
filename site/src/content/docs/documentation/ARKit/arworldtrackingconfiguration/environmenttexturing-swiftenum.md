---
source_path: "documentation/ARKit/arworldtrackingconfiguration/environmenttexturing-swiftenum.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arworldtrackingconfiguration/environmenttexturing-swiftenum"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:arworldtrackingconfigurationenvironmenttexturing:0000:0001">ARWorldTrackingConfiguration.EnvironmentTexturing</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arworldtrackingconfigurationenvironmenttexturing:0001:0001">**Framework**: ARKit **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arworldtrackingconfigurationenvironmenttexturing:0002:0001">월드 트래킹을 위한 환경 텍스처링에서 사용할 수 있는 옵션입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arworldtrackingconfigurationenvironmenttexturing:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:arworldtrackingconfigurationenvironmenttexturing:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:arworldtrackingconfigurationenvironmenttexturing:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:arworldtrackingconfigurationenvironmenttexturing:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum EnvironmentTexturing
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">환경 텍스처는 장면의 특정 지점에서 모든 방향을 표현하는 큐브맵 텍스처입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">3D 자산 렌더링에서 환경 텍스처는 주변 표면이 주변광을 자연스럽게 반사할 수 있도록 하는 이미지 기반 조명 알고리즘의 기반이 됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">ARKit는 AR 세션 중 카메라 영상을 사용해 환경 텍스처를 생성하며, 이를 통해 SceneKit 또는 사용자 정의 렌더링 엔진이 AR 경험의 가상 객체에 사실적인 이미지 기반 조명을 제공할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">구성을 위해 텍스처 맵 생성을 사용 설정하려면 이 속성을 기본값인 <a href="arworldtrackingconfiguration/environmenttexturing-swift.enum/none.md">@@TOKEN_0@@</a>에서 변경해야 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0001"><a href="arworldtrackingconfiguration/environmenttexturing-swift.enum/manual.md">@@TOKEN_0@@</a> 환경 텍스처링을 사용하면, <a href="arenvironmentprobeanchor.md">@@TOKEN_1@@</a> 객체를 생성해 세션에 추가하여 장면에서 라이트 프로브 텍스처 맵을 생성할 지점을 지정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0002"><a href="arworldtrackingconfiguration/environmenttexturing-swift.enum/automatic.md">@@TOKEN_0@@</a> 환경 텍스처링에서는 ARKit가 세션에 <a href="arenvironmentprobeanchor.md">@@TOKEN_1@@</a> 개체를 자동으로 생성하고 배치하며 추가합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">두 경우 모두 세션이 카메라 이미지를 수집할 때 ARKit가 환경 텍스처를 자동으로 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002"><a href="arsessiondelegate/session(_:didupdate:">@@TOKEN_0@@</a>-3qtt8.md)와 같은 delegate 메서드를 사용해 텍스처 사용 가능 시점을 확인하고, 앵커의 <a href="arenvironmentprobeanchor/environmenttexture.md">@@TOKEN_1@@</a> 속성에서 이를 가져올 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001"><a href="arscnview.md">@@TOKEN_0@@</a>와 <a href="arscnview/automaticallyupdateslighting.md">@@TOKEN_1@@</a> 옵션을 사용하여 AR 콘텐츠를 표시하면, SceneKit이 <a href="arenvironmentprobeanchor.md">@@TOKEN_2@@</a> 텍스처 맵을 자동으로 검색해 씬을 조명하는 데 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0013:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:enumeration-cases:0014:0001">열거형 케이스</span>

- <span class="ko-segment" data-segment-id="seg:list:enumeration-cases:0015:0001"><a href="arworldtrackingconfiguration/environmenttexturing-swift.enum/automatic.md">ARWorldTrackingConfiguration.EnvironmentTexturing.automatic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumeration-cases:0016:0001">framework는 환경 텍스처를 생성할 시점과 위치를 자동으로 결정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumeration-cases:0017:0001"><a href="arworldtrackingconfiguration/environmenttexturing-swift.enum/manual.md">ARWorldTrackingConfiguration.EnvironmentTexturing.manual</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumeration-cases:0018:0001">framework는 세션에 명시적으로 추가한 프로브 앵커에 대해서만 환경 텍스처를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:enumeration-cases:0019:0001"><a href="arworldtrackingconfiguration/environmenttexturing-swift.enum/none.md">ARWorldTrackingConfiguration.EnvironmentTexturing.none</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enumeration-cases:0020:0001">framework는 환경 텍스처를 생성하지 않습니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0021:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0022:0001"><a href="arworldtrackingconfiguration/environmenttexturing-swift.enum/init(rawvalue:">init?(rawValue: Int)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0023:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0024:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0026:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="argeotrackingconfiguration/environmenttexturing.md">var environmentTexturing: ARWorldTrackingConfiguration.EnvironmentTexturing</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">framework가 환경 텍스처를 생성하는 방식을 결정하는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="arenvironmentprobeanchor.md">class AREnvironmentProbeAnchor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">world-tracking AR 세션에서 특정 공간 영역의 환경 조명 정보를 제공하는 개체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="argeotrackingconfiguration/wantshdrenvironmenttextures.md">var wantsHDREnvironmentTextures: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">framework가 환경 텍스처를 HDR 형식으로 생성하도록 지시하는 플래그입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">*<a href="https://developer.apple.com/documentation/arkit/arworldtrackingconfiguration/environmenttexturing-swift.enum">View on Apple Developer</a>*</span>
