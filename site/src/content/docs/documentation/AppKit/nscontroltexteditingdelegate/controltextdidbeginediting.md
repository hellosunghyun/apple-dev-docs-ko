---
source_path: "documentation/AppKit/nscontroltexteditingdelegate/controltextdidbeginediting.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nscontroltexteditingdelegate/controltextdidbeginediting"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:controltextdidbeginediting:0000:0001">controlTextDidBeginEditing(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:controltextdidbeginediting:0001:0001">**Framework**: AppKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:controltextdidbeginediting:0002:0001">이 메서드는 컨트롤이 텍스트 콘텐츠 편집을 시작했음을 델리게이트에 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:controltextdidbeginediting:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:controltextdidbeginediting:0004:0001">macOS 10.10+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@MainActor
optional func controlTextDidBeginEditing(_ obj: Notification)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">If the main thread is blocked by an invocation of <a href="nsdocument/performactivity(withsynchronouswaiting:using:">@@TOKEN_0@@</a>.md) or <a href="nsdocument/performsynchronousfileaccess(_:">@@TOKEN_1@@</a>.md), this method interrupts that blocking activity, performs the specified <code>block</code>, and then resumes the blocking activity after <code>block</code> returns.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>obj</code>: 편집 구성에 대한 세부 정보를 포함하는 알림 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nscontroltexteditingdelegate/controltextdidchange(_:">func controlTextDidChange(Notification)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">이 메서드는 컨트롤이 텍스트 콘텐츠를 변경했음을 델리게이트에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nscontroltexteditingdelegate/controltextdidendediting(_:">func controlTextDidEndEditing(Notification)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">이 메서드는 컨트롤이 텍스트 콘텐츠 편집을 마치고 변경 내용을 커밋했음을 델리게이트에 알립니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/appkit/nscontroltexteditingdelegate/controltextdidbeginediting(_:">View on Apple Developer</a>)*</span>
