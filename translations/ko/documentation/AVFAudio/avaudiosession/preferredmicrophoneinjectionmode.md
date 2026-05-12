---
source_path: "documentation/AVFAudio/avaudiosession/preferredmicrophoneinjectionmode.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/preferredmicrophoneinjectionmode"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:preferredmicrophoneinjectionmode:0000:0001">preferredMicrophoneInjectionMode</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredmicrophoneinjectionmode:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredmicrophoneinjectionmode:0002:0001">다른 앱의 입력 스트림으로 오디오를 주입할 때 선호되는 모드입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredmicrophoneinjectionmode:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:preferredmicrophoneinjectionmode:0004:0001">iOS 18.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredmicrophoneinjectionmode:0004:0002">iPadOS 18.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredmicrophoneinjectionmode:0004:0003">Mac Catalyst 18.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredmicrophoneinjectionmode:0004:0004">visionOS 2.2+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var preferredMicrophoneInjectionMode: AVAudioSession.MicrophoneInjectionMode { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avaudiosession/ismicrophoneinjectionavailable.md">var isMicrophoneInjectionAvailable: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">마이크로폰 주입 사용 가능 여부를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiosession/setpreferredmicrophoneinjectionmode(_:">func setPreferredMicrophoneInjectionMode(AVAudioSession.MicrophoneInjectionMode) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">다른 앱의 입력 스트림에 오디오를 주입할 때 선호 모드를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosession/microphoneinjectionmode.md">AVAudioSession.MicrophoneInjectionMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">다른 앱의 입력 스트림으로 오디오를 주입하는 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosession/microphoneinjectioncapabilitieschangenotification.md">class let microphoneInjectionCapabilitiesChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">입력 스트림에 오디오를 주입할 수 있는 기능이 변경될 때 시스템이 게시하는 알림입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/preferredmicrophoneinjectionmode">View on Apple Developer</a>*</span>
