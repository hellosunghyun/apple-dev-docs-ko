---
source_path: "documentation/AVKit/avplayerview/begintrimming-completionhandler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avplayerview/begintrimming-completionhandler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:begintrimmingcompletionhandler:0000:0001">beginTrimming(completionHandler:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:begintrimmingcompletionhandler:0001:0001">**Framework**: AVKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:begintrimmingcompletionhandler:0002:0001">플레이어 보기를 트리밍 모드로 전환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:begintrimmingcompletionhandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:begintrimmingcompletionhandler:0004:0001">macOS 10.9+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func beginTrimming() async -> AVPlayerViewTrimResult
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="implementing-trimming-in-a-macos-player.md">Implementing Trimming in a macOS Player</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">핸들러 블록의 예제 구현은 다음과 같습니다.</span>

```swift
@IBAction func beginTrimming(_ sender: AnyObject) {
    playerView.beginTrimming { result in
        if result == .okButton {
            // user selected Trim button (AVPlayerViewTrimResult.okButton)...
        } else {
            // user selected Cancel button (AVPlayerViewTrimResult.cancelButton)...
        }
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">이 메서드는 사용자가 Trim 또는 Cancel 버튼 중 하나를 선택할 때까지 블록됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>handler</code>: 트리밍 UI에서 사용자가 Trim 또는 Cancel 버튼을 선택하면 시스템이 호출하는 콜백입니다. 클로저에 전달되는 결과는 사용자가 Trim 또는 Cancel 버튼을 클릭했는지 여부를 나타냅니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayerview/canbegintrimming.md">var canBeginTrimming: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">플레이어 뷰가 트리밍을 시작할 수 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avplayerviewtrimresult.md">enum AVPlayerViewTrimResult</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">플레이어 보기에서 미디어를 트리밍할 때 사용자가 수행한 동작을 지정하는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avkit/avplayerview/begintrimming(completionhandler:">View on Apple Developer</a>)*</span>
