---
source_path: "documentation/ARKit/arbodytrackingconfiguration/initialworldmap.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arbodytrackingconfiguration/initialworldmap"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initialworldmap:0000:0001">initialWorldMap</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initialworldmap:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initialworldmap:0002:0001">이 세션 구성에서 재개를 시도하려는 이전 AR 세션의 상태입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initialworldmap:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initialworldmap:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initialworldmap:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initialworldmap:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var initialWorldMap: ARWorldMap? { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">In the case that <a href="argeometrysource/componentspervector.md">@@TOKEN_0@@</a> is greater than 1, the element type of the geometry-source array is itself, a sequence.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 상태에는 사용자가 장치를 이동하는 물리적 공간에 대한 ARKit의 인식(ARKit이 장치의 위치와 방향을 결정하는 데 사용)이 포함되며, 세션에 추가된 모든 <a href="aranchor.md">@@TOKEN_0@@</a> 객체도 포함됩니다(이는 감지된 실제 세계의 특징이거나 앱이 배치한 가상 콘텐츠를 나타낼 수 있음).</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003"><a href="arsession/getcurrentworldmap(completionhandler:">@@TOKEN_0@@</a>.md)로 세션의 월드 맵을 저장한 다음, 구성의 <a href="arworldtrackingconfiguration/initialworldmap.md">@@TOKEN_1@@</a> 속성에 할당하고 <a href="arsession/run(_:options:">@@TOKEN_2@@</a>.md)로 동일한 공간 인식과 앵커를 가진 다른 세션을 시작할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">월드 맵을 저장한 뒤 이를 사용해 새 세션을 시작하면, 앱은 새로운 AR 기능을 추가할 수 있습니다:</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0001">**멀티유저 AR 경험.** 보관된 <a href="arworldmap.md">@@TOKEN_0@@</a> 객체를 주변 사용자 기기로 전송하여 공유 기준 좌표계를 만듭니다. 두 기기가 동일한 월드 맵을 추적하면 두 사용자 모두 동일한 가상 콘텐츠를 보고 상호작용하는 네트워크형 경험을 구성할 수 있습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0002">**지속형 AR 경험.** 앱이 비활성 상태가 되면 월드 맵을 저장한 뒤, 동일한 물리적 환경에서 다음에 앱이 실행될 때 이를 복원할 수 있습니다. 재개된 월드 맵의 앵커를 사용해 저장된 세션의 동일한 위치에 동일한 가상 콘텐츠를 배치할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">초기 월드 맵으로 세션을 실행하면, ARKit가 기록된 월드 맵을 현재 환경과 정합하려고 시도하는 동안 세션이 <a href="arcamera/trackingstate-swift.enum/limited(_:">@@TOKEN_0@@</a>.md) (<a href="arcamera/trackingstate-swift.enum/reason/relocalizing.md">@@TOKEN_1@@</a>) 추적 상태로 시작됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">성공하면 짧은 시간 후 추적 상태가 <a href="arcamera/trackingstate-swift.enum/normal.md">@@TOKEN_0@@</a>로 전환되며, 현재 월드 좌표계와 앵커가 기록된 월드 맵의 좌표계 및 앵커와 일치함을 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">ARKit가 기록된 월드 맵을 현재 환경과 정합하지 못하면(예: 장치가 월드 맵이 기록된 위치와 완전히 다른 곳에 있는 경우) 세션은 <a href="arcamera/trackingstate-swift.enum/reason/relocalizing.md">@@TOKEN_0@@</a> 상태에 무기한 머뭅니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arbodytrackingconfiguration/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">새 바디 추적 구성을 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/arkit/arbodytrackingconfiguration/initialworldmap">View on Apple Developer</a>*</span>
