---
source_path: "documentation/ARKit/argeotrackingconfiguration/appclipcodetrackingenabled.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/argeotrackingconfiguration/appclipcodetrackingenabled"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:appclipcodetrackingenabled:0000:0001">appClipCodeTrackingEnabled</span>

<span class="ko-segment" data-segment-id="seg:paragraph:appclipcodetrackingenabled:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:appclipcodetrackingenabled:0002:0001">프레임워크가 물리적 환경에서 App Clip Codes를 검색하는지 나타내는 Boolean 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:appclipcodetrackingenabled:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:appclipcodetrackingenabled:0004:0001">iOS 14.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:appclipcodetrackingenabled:0004:0002">iPadOS 14.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:appclipcodetrackingenabled:0004:0003">Mac Catalyst 14.3+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var appClipCodeTrackingEnabled: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 property의 값이 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>면, 세션 대리자가 ARKit이 물리적 환경에서 감지한 모든 App Clip Code마다 <a href="arsessiondelegate/session(_:didadd:">@@TOKEN_1@@</a>.md)로 <a href="arappclipcodeanchor.md">@@TOKEN_2@@</a>를 받습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">기본값은 <code>false</code>입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 함수를 호출하기 전에 <a href="argeotrackingconfiguration/supportsappclipcodetracking.md">@@TOKEN_0@@</a>을 호출해 구성에서 App Clip Code 추적을 지원하는지 확인해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">App Clip과 연결되지 않은 물리적 코드를 스캔하지 않도록 시스템은 앱이 App Clip Codes와 상호 작용하기 전에 앱이 App Clip을 제공하는지 확인합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">App Clip을 제공하지 않으면 앱은 물리적 위치(<a href="aranchor/transform.md">@@TOKEN_0@@</a>)를 통해 환경의 코드를 인식할 수 있지만 코드 URL(<a href="arappclipcodeanchor/url.md">@@TOKEN_1@@</a>)은 <code>nil</code>로 유지됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="../AppClip/interacting-with-app-clip-codes-in-ar.md">Interacting with App Clip Codes in AR</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">App Clip Codes를 사용해 AR 경험에서 콘텐츠를 표시하고 서비스를 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="argeotrackingconfiguration/supportsappclipcodetracking.md">class var supportsAppClipCodeTracking: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">기기가 App Clip Codes를 추적하는지 나타내는 플래그입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="arappclipcodeanchor.md">class ARAppClipCodeAnchor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">실제 환경에서 App Clip Code의 위치와 방향을 추적하는 앵커입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/arkit/argeotrackingconfiguration/appclipcodetrackingenabled">View on Apple Developer</a>*</span>
