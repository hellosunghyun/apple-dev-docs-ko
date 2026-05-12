---
source_path: "documentation/AppKit/nsmenu/didendtrackingnotification.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsmenu/didendtrackingnotification"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:didendtrackingnotification:0000:0001">didEndTrackingNotification</span>

<span class="ko-segment" data-segment-id="seg:paragraph:didendtrackingnotification:0001:0001">**Framework**: AppKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:didendtrackingnotification:0002:0001">작업이 전송되지 않아도 메뉴 추적이 끝나면 게시됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:didendtrackingnotification:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:didendtrackingnotification:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class let didEndTrackingNotification: NSNotification.Name
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">When the value of this property is <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>, dropping an alias on the panel or asking for filenames or URLs returns the resolved aliases.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">The default value of this property is <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="nsmenu/didadditemnotification.md">class let didAddItemNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">메뉴에 메뉴 항목이 추가된 후 게시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nsmenu/didchangeitemnotification.md">class let didChangeItemNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">메뉴의 메뉴 항목이 모양을 바꾼 후 게시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nsmenu/didbegintrackingnotification.md">class let didBeginTrackingNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">메뉴 추적이 시작되면 게시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nsmenu/didremoveitemnotification.md">class let didRemoveItemNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">메뉴에서 메뉴 항목이 제거된 후 게시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nsmenu/didsendactionnotification.md">class let didSendActionNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">애플리케이션이 메뉴 항목의 action 메서드를 해당 메뉴 항목의 대상에 디스패치한 직후 게시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="nsmenu/willsendactionnotification.md">class let willSendActionNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">애플리케이션이 메뉴 항목의 action 메서드를 해당 메뉴 항목의 대상에 디스패치하기 직전에 게시됩니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/appkit/nsmenu/didendtrackingnotification">View on Apple Developer</a>*</span>
