---
source_path: "documentation/AppKit/nsapplicationdelegate/applicationwillunhide.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationwillunhide"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:applicationwillunhide:0000:0001">applicationWillUnhide(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applicationwillunhide:0001:0001">**Framework**: AppKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applicationwillunhide:0002:0001">앱이 곧 표시되려는 것을 대리자에게 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applicationwillunhide:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:applicationwillunhide:0004:0001">macOS 10.10+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@MainActor
optional func applicationWillUnhide(_ notification: Notification)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>notification</code>: <a href="nsapplication/willunhidenotification.md">@@TOKEN_1@@</a>이라는 이름의 알림입니다. 이 알림의 <a href="https://developer.apple.com/documentation/Foundation/NSNotification/object">@@TOKEN_2@@</a> 메서드를 호출하면 <code>NSApplication</code> 객체 자체가 반환됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="nscell/calcdrawinfo(_:">func unhide(Any?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">숨겨진 창을 화면으로 복원하고 수신자를 활성 상태로 만듭니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nscell/cellsize(forbounds:">func applicationWillHide(Notification)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">앱이 곧 숨겨질 것을 대리자에게 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nscell/drawingrect(forbounds:">func applicationDidHide(Notification)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">앱이 이제 숨김 상태임을 대리자에게 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nscell/imagerect(forbounds:">func applicationDidUnhide(Notification)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">앱이 이제 표시됨을 대리자에게 알립니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationwillunhide(_:">Apple Developer에서 보기</a>)*</span>
