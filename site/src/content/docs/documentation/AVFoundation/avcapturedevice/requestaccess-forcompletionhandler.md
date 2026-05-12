---
source_path: "documentation/AVFoundation/avcapturedevice/requestaccess-forcompletionhandler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/requestaccess-forcompletionhandler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:requestaccessforcompletionhandler:0000:0001">requestAccess(for:completionHandler:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requestaccessforcompletionhandler:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requestaccessforcompletionhandler:0002:0001">특정 유형의 미디어를 앱이 캡처할 수 있도록 사용자의 허가를 요청합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:requestaccessforcompletionhandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:requestaccessforcompletionhandler:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:requestaccessforcompletionhandler:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:requestaccessforcompletionhandler:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:requestaccessforcompletionhandler:0004:0004">macOS 10.14+</span>
- <span class="ko-segment" data-segment-id="seg:list:requestaccessforcompletionhandler:0004:0005">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:requestaccessforcompletionhandler:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class func requestAccess(for mediaType: AVMediaType) async -> Bool
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="tracking-photo-capture-progress.md">Requesting authorization to capture and save media</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">미디어를 캡처하려면 사용자로부터 명시적 권한이 필요합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">앱의 기본 권한 상태는 <a href="avauthorizationstatus/notdetermined.md">@@TOKEN_0@@</a>로, 사용자가 아직 미디어 캡처 권한을 부여하지 않았음을 의미합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">권한이 필요한 미디어 형식에 대해 <a href="avcapturedeviceinput.md">@@TOKEN_0@@</a> 객체를 처음 생성하면 시스템이 자동으로 녹음 권한을 요청하는 경고를 표시합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0004">대신 이 메서드를 호출하여 원하는 시점에 사용자를 요청할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0005">시스템은 사용자의 선택을 저장하므로 더 이상 사용자를 다시 요청하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0006">사용자는 설정 앱에서 권한 상태를 변경할 수 있습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0001">❗ **중요**: 앱은 캡처 장치 사용에 대한 설명을 제공하려면 <a href="https://developer.apple.com/documentation/BundleResources/Information-Property-List/NSCameraUsageDescription">@@TOKEN_0@@</a>와 <a href="https://developer.apple.com/documentation/BundleResources/Information-Property-List/NSMicrophoneUsageDescription">@@TOKEN_1@@</a> Info.plist 키를 사용해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0002">시스템은 권한을 요청할 때, 그리고 이후 설정 앱에서 이 키에 대해 설정한 문자열을 표시합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0003">사용 설명을 제공하지 않은 상태에서 이 메서드를 호출하거나 캡처 세션을 시작하려고 하면 예외가 발생합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">시스템이 사용자에게 접근 권한을 요청하는 동안에도 이 메서드 호출은 스레드를 차단하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0002">단, 권한이 부여될 때까지 시스템은 검은색 비디오 프레임과 무음 오디오 샘플만 제공합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0013:0001">**참고**: 미디어 타입이 <a href="avmediatype/audio.md">@@TOKEN_0@@</a>인 경우 이 메서드를 호출하면 <a href="https://developer.apple.com/documentation/AVFAudio/AVAudioSession">@@TOKEN_1@@</a>의 <a href="https://developer.apple.com/documentation/AVFAudio/AVAudioSession/requestRecordPermission(_:">@@TOKEN_2@@</a>) 메서드를 호출하는 것과 동일합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0014:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0015:0001"><code>mediaType</code>: 권한 상태를 확인할 미디어 타입입니다. 지원되는 미디어 타입은 <a href="avmediatype/video.md">@@TOKEN_1@@</a> 및 <a href="avmediatype/audio.md">@@TOKEN_2@@</a>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0015:0002"><code>handler</code>: 사용자가 앱에 대한 접근을 허용했는지 또는 거부했는지를 나타내는 부울 값을 전달하는 콜백입니다. 사용자 인터페이스 업데이트를 수행하기 전에 메인 큐 또는 <a href="https://developer.apple.com/documentation/Swift/MainActor">@@TOKEN_1@@</a>로 제어를 반환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0016:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturephotocapturedelegate/photooutput(_:didcapturephotofor:">class func authorizationStatus(for: AVMediaType) -&gt; AVAuthorizationStatus</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">특정 유형의 미디어를 캡처할 수 있도록 사용자가 앱에 권한을 부여했는지를 나타내는 권한 상태를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avauthorizationstatus.md">enum AVAuthorizationStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">앱의 미디어 캡처 권한 상태를 나타내는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:willcapturephotofor:">View on Apple Developer</a>)*</span>
