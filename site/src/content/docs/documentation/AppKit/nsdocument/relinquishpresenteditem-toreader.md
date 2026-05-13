---
source_path: "documentation/AppKit/nsdocument/relinquishpresenteditem-toreader.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsdocument/relinquishpresenteditem-toreader"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:relinquishpresenteditemtoreader:0000:0001">relinquishPresentedItem(toReader:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:relinquishpresenteditemtoreader:0001:0001">**Framework**: AppKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:relinquishpresenteditemtoreader:0002:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:relinquishpresenteditemtoreader:0003:0001">macOS 10.7+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0004:0001">Declaration</span>

```swift
nonisolated
func relinquishPresentedItem(toReader reader: @escaping @Sendable ((@Sendable () -> Void)?) -> Void)
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0006:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0001"><a href="nsdocument/accommodatepresenteditemdeletion(completionhandler:">func accommodatePresentedItemDeletion(completionHandler: ((any Error)?) -&gt; Void)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0002"><a href="nsdocument/presenteditemdidchange.md">func presentedItemDidChange()</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0003"><a href="nsdocument/presenteditemdidchangeubiquityattributes(_:">func presentedItemDidChangeUbiquityAttributes(Set&lt;URLResourceKey&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0004"><a href="nsdocument/presenteditemdidgain(_:">func presentedItemDidGain(NSFileVersion)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0005"><a href="nsdocument/presenteditemdidlose(_:">func presentedItemDidLose(NSFileVersion)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0006"><a href="nsdocument/presenteditemdidmove(to:">func presentedItemDidMove(to: URL)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0007"><a href="nsdocument/presenteditemdidresolveconflict(_:">func presentedItemDidResolveConflict(NSFileVersion)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0008"><a href="nsdocument/relinquishpresenteditem(towriter:">func relinquishPresentedItem(toWriter: ((() -&gt; Void)?) -&gt; Void)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0009"><a href="nsdocument/savepresenteditemchanges(completionhandler:">func savePresentedItemChanges(completionHandler: ((any Error)?) -&gt; Void)</a>.md)</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">*<a href="https://developer.apple.com/documentation/appkit/nsdocument/relinquishpresenteditem(toreader:">View on Apple Developer</a>)*</span>
