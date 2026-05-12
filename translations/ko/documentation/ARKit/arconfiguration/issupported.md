---
source_path: "documentation/ARKit/arconfiguration/issupported.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arconfiguration/issupported"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:issupported:0000:0001">isSupported</span>

<span class="ko-segment" data-segment-id="seg:paragraph:issupported:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:issupported:0002:0001">현재 기기가 이 세션 구성 클래스를 지원하는지 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:issupported:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:issupported:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:issupported:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:issupported:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class var isSupported: Bool { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="managing-session-life-cycle-and-tracking-quality.md">Verifying Device Support and User Permission</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">An <a href="arworldmap.md">@@TOKEN_0@@</a> encapsulates the state of a running <a href="arsession.md">@@TOKEN_1@@</a>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">AR 구성을 생성하기 전에 해당 구성 클래스의 <a href="arconfiguration/issupported.md">@@TOKEN_0@@</a> 속성을 확인해 사용하려는 구성이 사용자 기기에서 지원되는지 검증합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">이 속성 값이 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_0@@</a>이면, 현재 기기는 요청한 구성을 지원하지 않습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0001">❗ **중요**: 모든 ARKit 구성은 A9 이상 프로세서를 갖춘 iOS 기기가 필요합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0002">앱이 다른 기기를 지원하고 AR을 보조 기능으로 제공한다면, 이 속성을 사용해 사용자에게 AR 기반 기능을 제공할지 결정합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0003">앱의 핵심 기능에 ARKit가 필요하다면 앱의 Info.plist에서 <a href="https://developer.apple.com/documentation/BundleResources/Information-Property-List/UIRequiredDeviceCapabilities">@@TOKEN_0@@</a> 섹션의 <code>arkit</code> 키를 사용해 ARKit을 지원하는 기기에서만 앱을 사용할 수 있게 해야 합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001">*<a href="https://developer.apple.com/documentation/arkit/arconfiguration/issupported">View on Apple Developer</a>*</span>
