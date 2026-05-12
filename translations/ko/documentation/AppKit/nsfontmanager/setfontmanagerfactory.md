---
source_path: "documentation/AppKit/nsfontmanager/setfontmanagerfactory.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsfontmanager/setfontmanagerfactory"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:setfontmanagerfactory:0000:0001">setFontManagerFactory(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setfontmanagerfactory:0001:0001">**Framework**: AppKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setfontmanagerfactory:0002:0001">공유 font manager 객체를 생성하는 클래스를 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setfontmanagerfactory:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:setfontmanagerfactory:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class func setFontManagerFactory(_ factoryId: AnyClass?)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">When you call the <a href="nsfontmanager/shared.md">@@TOKEN_0@@</a> method of <a href="nsfontmanager.md">@@TOKEN_1@@</a>, it creates an instance of <code>aClass</code>, if no instance already exists.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">The class in <code>aClass</code> must implement <code>init</code> as its designated initializer.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">The default font manager factory is <code>NSFontManager</code>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">Call this method before AppKit loads your application’s main nib file, such as in your app delegate’s <a href="nsapplicationdelegate/applicationwillfinishlaunching(_:">@@TOKEN_0@@</a>.md) method.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>factoryId</code>: The new font manager factory class, which must be a subclass of <a href="nsfontmanager.md">@@TOKEN_1@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="nsfontmanager/setfontpanelfactory(_:">class func setFontPanelFactory(AnyClass?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">Sets the class that creates the shared Font panel object.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/appkit/nsfontmanager/setfontmanagerfactory(_:">View on Apple Developer</a>)*</span>
