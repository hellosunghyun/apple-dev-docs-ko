---
source_path: "documentation/ARKit/arpositionaltrackingconfiguration/initialworldmap.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arpositionaltrackingconfiguration/initialworldmap"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initialworldmap:0000:0001">initialWorldMap</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initialworldmap:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initialworldmap:0002:0001">이 세션 구성으로 재개하려는 이전 AR 세션의 상태입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initialworldmap:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initialworldmap:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initialworldmap:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initialworldmap:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var initialWorldMap: ARWorldMap? { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><a href="arworldmap.md">@@TOKEN_0@@</a>은 실행 중인 <a href="arsession.md">@@TOKEN_1@@</a>의 상태를 캡슐화합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 상태에는 사용자가 기기를 이동하는 물리적 공간에 대한 ARKit의 인식(기기의 위치와 방향을 결정하는 데 사용됨)과 세션에 추가된 모든 <a href="aranchor.md">@@TOKEN_0@@</a> 객체(탐지된 실제 환경 기능이나 앱이 배치한 가상 콘텐츠를 나타낼 수 있는 객체)가 포함됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003"><a href="arsession/getcurrentworldmap(completionhandler:">@@TOKEN_0@@</a>.md)로 세션의 world map을 저장한 뒤, 이를 구성의 <a href="arworldtrackingconfiguration/initialworldmap.md">@@TOKEN_1@@</a> 속성에 할당하고 <a href="arsession/run(_:options:">@@TOKEN_2@@</a>.md)로 동일한 공간 인식 및 앵커를 가진 다른 세션을 시작할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">월드맵을 저장하고 이를 사용해 새 세션을 시작하면 앱에 새로운 AR 기능을 추가할 수 있습니다:</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0001">**멀티유저 AR 경험.** 보관한 <a href="arworldmap.md">@@TOKEN_0@@</a> 객체를 주변 사용자의 기기로 전송하여 공유 참조 프레임을 만들 수 있습니다. 두 기기가 동일한 world map을 추적하면 두 사용자가 동일한 가상 콘텐츠를 보고 상호작용하는 네트워크 경험을 구축할 수 있습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0002">**지속적인 AR 경험.** 앱이 비활성 상태가 될 때 world map을 저장한 다음, 앱이 동일한 물리적 환경에서 다시 시작될 때 복원할 수 있습니다. 재개된 world map의 앵커를 사용하면 저장된 세션의 동일한 위치에 동일한 가상 콘텐츠를 배치할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">Calling this method implicitly calls <a href="avaudiorecorder/preparetorecord(">@@TOKEN_0@@</a>.md), which creates an audio file and prepares the system for recording.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">성공하면 짧은 시간 후 추적 상태가 <a href="arcamera/trackingstate-swift.enum/normal.md">@@TOKEN_0@@</a>로 전환되어 현재 월드 좌표계와 앵커가 기록된 world map의 좌표계와 일치함을 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">ARKit가 기록된 world map을 현재 환경과 일치시킬 수 없으면(예: 기기가 world map이 기록된 위치와 완전히 다른 장소에 있는 경우) 세션은 계속해서 <a href="arcamera/trackingstate-swift.enum/reason/relocalizing.md">@@TOKEN_0@@</a> 상태에 머뭅니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arpositionaltrackingconfiguration/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">새 위치 추적 구성을 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/arkit/arpositionaltrackingconfiguration/initialworldmap">View on Apple Developer</a>*</span>
