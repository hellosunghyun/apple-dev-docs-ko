---
source_path: "documentation/AVFAudio/avaudioapplication/setinputmutestatechangehandler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioapplication/setinputmutestatechangehandler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:setinputmutestatechangehandler:0000:0001">setInputMuteStateChangeHandler(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setinputmutestatechangehandler:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setinputmutestatechangehandler:0002:0001">애플리케이션 수준 오디오 음소거 상태 변경을 처리할 콜백을 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setinputmutestatechangehandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:setinputmutestatechangehandler:0004:0001">macOS 14.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func setInputMuteStateChangeHandler(_ inputMuteHandler: ((Bool) -> Bool)?) throws
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 메서드를 사용하면 macOS 앱의 입력 음소거 로직을 처리할 클로저를 설정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">시스템은 입력 음소거 상태가 변경될 때 <a href="avaudioapplication/isinputmuted.md">@@TOKEN_0@@</a> 상태가 설정되거나 특정 AirPods / Beats 헤드폰의 Bluetooth 오디오 액세서리 제스처로 음소거 상태가 변경될 경우 이 클로저를 호출합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">입력 음소거 처리 로직은 한 곳에서만 수행되어야 하므로, 이 메서드를 뒤이어 호출하면 이전에 등록된 블록이 제공한 블록으로 덮어쓰기됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">콜백을 취소하려면 <code>nil</code>을 지정할 수 있습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0001">**참고**: 이 메서드는 macOS에서만 사용할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0002">다른 플랫폼에서는 시스템이 음소거 로직을 내부적으로 처리합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0003">이 클로저 내에서 입력 음소거 로직을 수행하고, 사용자 인터페이스 업데이트는 <a href="avaudioapplication/inputmutestatechangenotification.md">@@TOKEN_0@@</a> 핸들러에서 수행합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>inputMuteHandler</code>: 입력 음소거 상태 변경 시 시스템이 호출하는 콜백입니다. 콜백이 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a> 값을 받으면 시스템이 핸들러를 다음에 호출할 때까지 모든 입력 오디오 샘플을 음소거합니다. 입력 음소거를 성공적으로 처리하면 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_2@@</a>를 반환하고, 예외적인 경우에는 음소거 동작이 실패했음을 나타내기 위해 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_3@@</a>를 반환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudioapplication/isinputmuted.md">var isInputMuted: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">앱의 오디오 입력이 음소거 상태인지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudioapplication/setinputmuted(_:">func setInputMuted(Bool) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">앱의 오디오 입력이 음소거 상태인지 나타내는 불리언 값을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudioapplication/inputmutestatechangenotification.md">class let inputMuteStateChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">시스템이 앱의 오디오 입력 음소거 상태 변경 시 게시하는 알림입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioapplication/setinputmutestatechangehandler(_:">Apple Developer에서 보기</a>)*</span>
