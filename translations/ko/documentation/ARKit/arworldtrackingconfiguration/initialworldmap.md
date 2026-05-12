---
source_path: "documentation/ARKit/arworldtrackingconfiguration/initialworldmap.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arworldtrackingconfiguration/initialworldmap"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initialworldmap:0000:0001">initialWorldMap</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initialworldmap:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initialworldmap:0002:0001">이 세션 구성으로 다시 시작하려는 이전 AR 세션의 상태입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initialworldmap:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initialworldmap:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initialworldmap:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initialworldmap:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var initialWorldMap: ARWorldMap? { get set }
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="managing-session-life-cycle-and-tracking-quality.md">Managing Session Life Cycle and Tracking Quality</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><a href="arworldmap.md">@@TOKEN_0@@</a>는 실행 중인 <a href="arsession.md">@@TOKEN_1@@</a>의 상태를 캡슐화합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">이 상태에는 사용자가 기기를 이동시키는 물리적 공간에 대한 ARKit의 인식(ARKit가 기기의 위치와 방향을 결정할 때 사용하는 정보)뿐 아니라 세션에 추가된 모든 <a href="aranchor.md">@@TOKEN_0@@</a> 객체가 포함됩니다. 이 객체는 감지된 실제 세계 특성이나 앱이 배치한 가상 콘텐츠를 나타낼 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003"><a href="arsession/getcurrentworldmap(completionhandler:">@@TOKEN_0@@</a>.md)로 세션의 월드맵을 저장한 뒤 해당 맵을 구성의 <a href="arworldtrackingconfiguration/initialworldmap.md">@@TOKEN_1@@</a> 속성에 할당하고, <a href="arsession/run(_:options:">@@TOKEN_2@@</a>.md)로 동일한 공간 인식 및 앵커를 가진 다른 세션을 시작할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">월드맵을 저장하고 이를 사용해 새 세션을 시작하면 앱에서 새로운 AR 기능을 추가할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0012:0001">**다중 사용자 AR 경험.** 보관된 <a href="arworldmap.md">@@TOKEN_0@@</a> 객체를 인근 사용자의 기기로 전송해 공유 기준 프레임을 만듭니다. 두 장치가 같은 월드맵을 추적하면 두 사용자가 동일한 가상 콘텐츠를 보고 상호 작용할 수 있는 네트워크형 경험을 구성할 수 있습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0012:0002">**지속적인 AR 경험.** 앱이 비활성화되면 월드맵을 저장한 다음, 다음 실행 시 동일한 물리적 환경에서 복원합니다. 복원된 월드맵의 앵커를 사용해 저장된 세션과 동일한 위치에 동일한 가상 콘텐츠를 배치할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">초기 월드맵으로 세션을 실행하면, ARKit이 기록된 월드맵을 현재 환경과 정합하려고 시도하는 동안 세션은 <a href="arcamera/trackingstate-swift.enum/limited(_:">@@TOKEN_0@@</a>.md) (<a href="arcamera/trackingstate-swift.enum/reason/relocalizing.md">@@TOKEN_1@@</a>) 추적 상태로 시작됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0002">성공하면 짧은 시간 후 추적 상태가 <a href="arcamera/trackingstate-swift.enum/normal.md">@@TOKEN_0@@</a>으로 전환되어 현재 월드 좌표계와 앵커가 기록된 월드맵의 값과 일치함을 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001">ARKit가 기록된 월드맵을 현재 환경과 정합하지 못하면(예: 기기가 월드맵이 기록된 장소와 완전히 다른 곳에 있는 경우), 세션은 <a href="arcamera/trackingstate-swift.enum/reason/relocalizing.md">@@TOKEN_0@@</a> 상태에 무기한 머뭅니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="arworldtrackingconfiguration/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">새로운 월드 트래킹 구성을 초기화합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/arkit/arworldtrackingconfiguration/initialworldmap">View on Apple Developer</a>*</span>
