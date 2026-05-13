---
source_path: "documentation/AppKit/nsdrawerdelegate/drawershouldopen.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsdrawerdelegate/drawershouldopen"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:drawershouldopen:0000:0001">drawerShouldOpen(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:drawershouldopen:0001:0001">**Framework**: AppKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:drawershouldopen:0002:0001">지정한 드로어를 열어야 하는지 delegate에게 질의합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:drawershouldopen:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:drawershouldopen:0004:0001">macOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func drawerShouldOpen(_ sender: NSDrawer) -> Bool
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">드로어를 열어야 하면 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>, 드로어 열림을 막아야 하면 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>를 반환합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 메서드는 사용자가 드래그로 드로어를 열려고 시도하거나 <a href="nsdrawerdelegate.md">@@TOKEN_0@@</a> 메서드가 호출될 때 실행됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>sender</code>: 열기 권한을 요청하는 드로어입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="https://developer.apple.comhttps://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Drawers/Drawers.html#//apple_ref/doc/uid/10000001i">Drawer Programming Topics</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0002"><a href="nsdrawerdelegate/drawerwillopen(_:">func drawerWillOpen(Notification)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">드로어가 곧 열릴 것임을 delegate에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nsdrawerdelegate/drawerdidopen(_:">func drawerDidOpen(Notification)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">드로어가 열렸음을 delegate에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nsdrawerdelegate/drawershouldclose(_:">func drawerShouldClose(NSDrawer) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지정한 드로어를 닫아야 하는지 delegate에게 질의합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="nsdrawerdelegate/drawerwillclose(_:">func drawerWillClose(Notification)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">드로어가 곧 닫힐 것임을 delegate에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="nsdrawerdelegate/drawerdidclose(_:">func drawerDidClose(Notification)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">드로어가 닫혔음을 delegate에 알립니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/appkit/nsdrawerdelegate/drawershouldopen(_:">View on Apple Developer</a>)*</span>
