---
source_path: "documentation/Accessibility/axfeatureoverridesessionerrordomain.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accessibility/axfeatureoverridesessionerrordomain"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:axfeatureoverridesessionerrordomain:0000:0001">AXFeatureOverrideSessionErrorDomain</span>

<span class="ko-segment" data-segment-id="seg:paragraph:axfeatureoverridesessionerrordomain:0001:0001">**Framework**: Accessibility **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:axfeatureoverridesessionerrordomain:0002:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:axfeatureoverridesessionerrordomain:0003:0001">iOS 18.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:axfeatureoverridesessionerrordomain:0003:0002">iPadOS 18.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:axfeatureoverridesessionerrordomain:0003:0003">Mac Catalyst 18.2+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0004:0001">Declaration</span>

```swift
let AXFeatureOverrideSessionErrorDomain: String
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0006:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0001"><a href="axfeatureoverridesession.md">class AXFeatureOverrideSession</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0008:0001">A token object that represents an override session held by your app.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0009:0001"><a href="axfeatureoverridesessionmanager.md">class AXFeatureOverrideSessionManager</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0010:0001">A manager class to begin and end accessibility feature override sessions.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0010:0002">Multiple override sessions are reconciled by combining the requests, preferring feature enablement.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0010:0003">Ending all sessions restores the prior state of Accessibility feature enablement.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0010:0004">Your app must be entitled with com.apple.developer.accessibility.merchant-api-control.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="axfeatureoverridesession/options.md">AXFeatureOverrideSession.Options</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">Options indicating which Accessibility features will be turned on or off when an override session is held by your app.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="axfeatureoverridesessionerror-swift.struct.md">struct AXFeatureOverrideSessionError</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0002"><a href="axfeatureoverridesessionerror-swift.struct/code.md">AXFeatureOverrideSessionError.Code</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0003"><a href="../BundleResources/Entitlements/com.apple.developer.accessibility.merchant-api-control.md">com.apple.developer.accessibility.merchant-api-control</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/accessibility/axfeatureoverridesessionerrordomain">View on Apple Developer</a>*</span>
