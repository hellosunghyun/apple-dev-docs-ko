---
source_path: "documentation/AVFoundation/avplayeritem/seek-to-3s9d8.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritem/seek-to-3s9d8"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:seekto:0000:0001">seek(to:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:seekto:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:seekto:0002:0001">현재 재생 시간을 date 개체가 지정한 시간으로 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:seekto:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:seekto:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:seekto:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:seekto:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:seekto:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:seekto:0004:0005">tvOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@MainActor
func seek(to date: Date) -> Bool
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>는 playhead가 <code>date</code>로 이동한 경우이고, 그렇지 않으면 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_2@@</a>입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">날짜 범위와 연결된 재생 콘텐츠의 경우 이 메서드는 재생 헤드를 해당 범위 내의 지점으로 이동합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">이 메서드는 <code>date</code>가 범위를 벗어나 있거나 콘텐츠가 날짜 범위와 연결되지 않은 경우 실패하며 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>를 반환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>date</code>: 이동할 시간입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayeritem/seek(to:tolerancebefore:toleranceafter:completionhandler:">func seek(to: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime, completionHandler: ((Bool) -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정된 시간 경계 내에서 현재 재생 시간을 설정하고, 탐색 작업이 완료되거나 중단되면 지정된 블록을 호출합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayeritem/seek(to:completionhandler:">func seek(to: CMTime, completionHandler: ((Bool) -&gt; Void)?)</a>-91gnw.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">현재 재생 시간을 지정된 시간으로 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avplayeritem/seek(to:">func seek(to: CMTime)</a>-1dpto.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">현재 재생 시간을 지정된 시간으로 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avplayeritem/seek(to:tolerancebefore:toleranceafter:">func seek(to: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">지정된 시간 경계 내에서 현재 재생 시간을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avplayeritem/seek(to:">func seek(to: Date) async -&gt; Bool</a>-5rt4x.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">날짜 개체가 지정한 시간으로 현재 재생 시간을 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritem/seek(to:">View on Apple Developer</a>-3s9d8)*</span>
