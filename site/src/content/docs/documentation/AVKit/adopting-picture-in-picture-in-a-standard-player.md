---
source_path: "documentation/AVKit/adopting-picture-in-picture-in-a-standard-player.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/adopting-picture-in-picture-in-a-standard-player"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:adopting-picture-in-picture-in-a-standard-player:0000:0001">표준 플레이어에서 Picture in Picture 사용하기</span>

<span class="ko-segment" data-segment-id="seg:paragraph:adopting-picture-in-picture-in-a-standard-player:0001:0001">**프레임워크**: AVKit</span>

<span class="ko-segment" data-segment-id="seg:paragraph:adopting-picture-in-picture-in-a-standard-player:0002:0001">플레이어 뷰 컨트롤러를 사용해 앱에 Picture in Picture(PiP) 재생을 추가합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001"><a href="avplayerviewcontroller.md">@@TOKEN_0@@</a>는 iOS, iPadOS, tvOS 전반에 걸쳐 표준 동영상 재생 경험을 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0002">tvOS에서는 다양한 원격 제어, 건너뛰기, 탐색, 스크러빙, Siri 명령, 인터스티셜 지원 등 여러 기능을 지원합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0003"><code>[</code>Configuring your app for media playback<code>]</code>(https://developer.apple.com/documentation/AVFoundation/configuring-your-app-for-media-playback)에서 설명한 대로 오디오 세션을 구성하고 프로젝트 기능을 설정하면 플레이어가 자동으로 PiP 재생을 지원합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0004">앱이 지원 기기에서 실행되면 사용자가 표준 플레이어에서 PiP를 관리할 수 있습니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:familiarize-yourself-with-the-pip-controls:0005:0001">PiP 제어 기능 익히기</span>

<span class="ko-segment" data-segment-id="seg:paragraph:familiarize-yourself-with-the-pip-controls:0006:0001">PiP 재생은 사용자 인터페이스에서 PiP 버튼을 선택하면 시작됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:familiarize-yourself-with-the-pip-controls:0006:0002">iOS와 iPadOS에서는 비디오가 전체 화면 모드에서 재생되고 사용자가 앱을 종료하면 PiP 재생이 자동으로 시작됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:familiarize-yourself-with-the-pip-controls:0006:0003">동영상이 너비 전체를 채우지 않을 때는 <a href="avplayerviewcontroller/canstartpictureinpictureautomaticallyfrominline.md">@@TOKEN_0@@</a>을 사용하여 해당 동영상이 기본 초점인지 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:familiarize-yourself-with-the-pip-controls:0006:0004">어떤 경우든 플레이어 창은 이동 가능한 플로팅 창으로 축소됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:familiarize-yourself-with-the-pip-controls:0006:0005">일반적으로 시스템은 장면이 백그라운드로 전환될 때 비디오를 자동으로 일시 정지하므로 활성 상태에 따라 비디오를 별도로 일시 정지할 필요가 없습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:familiarize-yourself-with-the-pip-controls:0007:0001">💡 **Tip**: iOS와 iPadOS에서는 설정 &gt; 일반 &gt; Picture in Picture에서 Picture in Picture의 자동 호출을 비활성화할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:familiarize-yourself-with-the-pip-controls:0007:0002">모든 설정이 올바르게 완료된 것으로 보이는데도 홈 화면으로 돌아갈 때 비디오가 PiP 모드로 진입하지 않으면 이 설정을 확인합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:familiarize-yourself-with-the-pip-controls:0008:0001">PiP 인터페이스에서 정지 버튼을 선택하면 PiP가 종료되고 앱에서 비디오 재생이 복원됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:familiarize-yourself-with-the-pip-controls:0008:0002">AVKit은 앱의 설계를 추측할 수 없으므로 비디오 재생 인터페이스를 적절히 복원하는 방법을 알지 못합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:familiarize-yourself-with-the-pip-controls:0008:0003">대신 그 책임은 사용자에게 위임됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:familiarize-yourself-with-the-pip-controls:0009:0001">iOS 14부터 PiP 사용자 인터페이스는 사용자가 동영상 내에서 앞뒤로 건너뛸 수 있는 제어 장치를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:familiarize-yourself-with-the-pip-controls:0009:0002">시스템은 iOS 14 이상을 대상으로 링크된 앱에 대해 기본적으로 이러한 제어를 활성화합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:familiarize-yourself-with-the-pip-controls:0009:0003">법적 고지문 또는 광고에서 콘텐츠 건너뛰기를 제한해야 하는 경우 동영상의 필수 구간 동안 <a href="avplayerviewcontroller/requireslinearplayback.md">@@TOKEN_0@@</a>을 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:familiarize-yourself-with-the-pip-controls:0009:0004">탐색을 다시 허용할 수 있게 되면 이 속성을 <code>false</code>로 되돌립니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:restore-your-video-playback-interface:0010:0001">비디오 재생 인터페이스 복원</span>

<span class="ko-segment" data-segment-id="seg:paragraph:restore-your-video-playback-interface:0011:0001">복원 프로세스를 처리하려면 코드가 <a href="avplayerviewcontrollerdelegate.md">@@TOKEN_0@@</a> 프로토콜을 채택하고 <a href="avplayerviewcontrollerdelegate/playerviewcontroller(_:restoreuserinterfaceforpictureinpicturestopwithcompletionhandler:">@@TOKEN_1@@</a>.md) 메서드를 구현해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:restore-your-video-playback-interface:0011:0002">프레임워크는 제어가 앱으로 다시 반환될 때 이 메서드를 호출하여 비디오 플레이어의 인터페이스를 올바르게 복원할 방법을 결정할 기회를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:restore-your-video-playback-interface:0011:0003"><a href="https://developer.apple.com/documentation/UIKit/UIViewController">@@TOKEN_0@@</a>의 <a href="https://developer.apple.com/documentation/UIKit/UIViewController/present(_:animated:completion:">@@TOKEN_1@@</a>) 메서드를 사용해 비디오 플레이어를 처음 표시했다면, delegate 콜백 메서드에서 동일한 방식으로 플레이어 인터페이스를 복원합니다.</span>

```swift
func playerViewController(_ playerViewController: AVPlayerViewController,
                          restoreUserInterfaceForPictureInPictureStopWithCompletionHandler completionHandler: @escaping (Bool) -> Void) {
    present(playerViewController, animated: false) {
        completionHandler(true)
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:restore-your-video-playback-interface:0013:0001">교체 중에는 애니메이션을 추가하지 않아 사용자가 빠르게 복원되도록 보장합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:restore-your-video-playback-interface:0014:0001">❗ **중요**: 시스템이 사용자 인터페이스 복원을 완료할 수 있도록 하려면 completion handler를 <code>true</code> 값으로 호출해야 합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:swap-pip-content-in-tvos:0015:0001">tvOS에서 PiP 콘텐츠 교체</span>

<span class="ko-segment" data-segment-id="seg:paragraph:swap-pip-content-in-tvos:0016:0001">tvOS에서는 사용자가 전체 화면 비디오와 함께 PiP에서 비디오를 재생할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:swap-pip-content-in-tvos:0016:0002">비디오 재생은 PiP와 전체 화면 사이를 이동할 수 있으므로 원활한 PiP 경험을 제공하려면 앱이 해당 교체를 처리할 준비가 되어 있어야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:swap-pip-content-in-tvos:0016:0003">다른 앱과 콘텐츠를 교체할 때에는 PiP로 들어가는 콘텐츠와 PiP를 떠나 전체 화면으로 전환되는 콘텐츠를 모두 고려해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:swap-pip-content-in-tvos:0016:0004">아래 그림은 전체 화면 콘텐츠가 다른 앱의 PiP와 교체되는 수명 주기를 보여줍니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:swap-pip-content-in-tvos:0017:0001">![전체 화면 비디오가 PiP로 이동할 때 앱이 받는 delegate 호출 순서를 설명하는 다이어그램.</span> <span class="ko-segment" data-segment-id="seg:paragraph:swap-pip-content-in-tvos:0017:0002">교체가 시작되면 플레이어 뷰 컨트롤러가 will start PiP 메서드를 호출합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:swap-pip-content-in-tvos:0017:0003">이 시점에서는 아직 애니메이션이 시작되지 않았습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:swap-pip-content-in-tvos:0017:0004">전환과 애니메이션이 완료되면 플레이어 뷰 컨트롤러가 did stop PiP 메서드를 호출합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:swap-pip-content-in-tvos:0017:0005">마지막으로 앱이 백그라운드 상태가 됩니다. ](https://docs-assets.developer.apple.com/published/660b45bbe135d61ae1a97a16422ef178/media-3908854%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:swap-pip-content-in-tvos:0018:0001">아래 그림은 앱의 PiP 콘텐츠가 전체 화면으로 이동할 때의 수명 주기를 보여줍니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:swap-pip-content-in-tvos:0019:0001">![PiP 비디오가 전체 화면으로 이동할 때 앱이 받는 delegate 호출 순서를 설명하는 다이어그램.</span> <span class="ko-segment" data-segment-id="seg:paragraph:swap-pip-content-in-tvos:0019:0002">교체가 시작되면 시스템이 앱을 포그라운드로 이동시키고 플레이어 뷰 컨트롤러가 restore user interface for PiP 메서드를 호출합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:swap-pip-content-in-tvos:0019:0003">이 시점에서 교체가 시작되었지만 애니메이션은 아직 시작되지 않았습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:swap-pip-content-in-tvos:0019:0004">플레이어 뷰 컨트롤러는 will stop PiP 메서드를 호출한 다음, 전환 및 애니메이션이 완료되면 did stop PiP 메서드를 호출합니다.](https://docs-assets.developer.apple.com/published/7c273e2fce23c889d2c406e3798f81e2/media-3908855%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:swap-pip-content-in-tvos:0020:0001">앱 내에서 콘텐츠를 교체할 때에는 두 비디오 플레이어 모두의 수명 주기 이벤트 양쪽을 처리해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:swap-pip-content-in-tvos:0020:0002">다음 시퀀스는 PiP와 전체 화면 사이에서 콘텐츠를 교체하는 비디오에서 발생하는 콜백을 보여줍니다.</span>

1. <span class="ko-segment" data-segment-id="seg:list:swap-pip-content-in-tvos:0021:0001">PiP를 시작하는 비디오는 <a href="avplayerviewcontrollerdelegate/playerviewcontrollerwillstartpictureinpicture(_:">@@TOKEN_0@@</a>.md)를 수신하지만, 시스템은 아직 애니메이션을 시작하지 않았습니다.</span>
2. <span class="ko-segment" data-segment-id="seg:list:swap-pip-content-in-tvos:0021:0002">전체 화면으로 전환되는 비디오는 전체 화면 사용자 인터페이스를 복원하기 위해 <a href="avplayerviewcontrollerdelegate/playerviewcontroller(_:restoreuserinterfaceforpictureinpicturestopwithcompletionhandler:">@@TOKEN_0@@</a>.md)를 수신합니다.</span>
3. <span class="ko-segment" data-segment-id="seg:list:swap-pip-content-in-tvos:0021:0003">전체 화면으로 이동하는 비디오는 <a href="avplayerviewcontrollerdelegate/playerviewcontrollerwillstoppictureinpicture(_:">@@TOKEN_0@@</a>.md)를 수신하며, 시스템은 아직 애니메이션을 시작하지 않습니다.</span>
4. <span class="ko-segment" data-segment-id="seg:list:swap-pip-content-in-tvos:0021:0004">PiP를 시작하는 비디오는 <a href="avplayerviewcontrollerdelegate/playerviewcontrollerdidstartpictureinpicture(_:">@@TOKEN_0@@</a>.md)를 수신하고 시스템은 PiP를 시작한 비디오의 전환과 애니메이션을 완료합니다.</span>
5. <span class="ko-segment" data-segment-id="seg:list:swap-pip-content-in-tvos:0021:0005">전체 화면으로 이동하는 비디오는 <a href="avplayerviewcontrollerdelegate/playerviewcontrollerdidstoppictureinpicture(_:">@@TOKEN_0@@</a>.md)를 수신하고 시스템은 전체 화면으로 이동한 비디오의 전환 및 애니메이션을 완료합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:swap-pip-content-in-tvos:0022:0001">![앱이 전체 화면과 PiP 비디오를 모두 소유할 때 앱이 받는 delegate 호출 순서를 설명하는 다이어그램.</span> <span class="ko-segment" data-segment-id="seg:paragraph:swap-pip-content-in-tvos:0022:0002">전체 화면 플레이어와 PiP 플레이어 사이에서 예상되는 호출 순서는 그림 앞에 표시됩니다.](https://docs-assets.developer.apple.com/published/eea0e50ab42ff488144b862ae57cdf7b/media-3908853%402x.png)</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0023:0001">추가 정보</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="adopting-picture-in-picture-playback-in-tvos.md">Adopting Picture in Picture Playback in tvOS</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">tvOS에서 PiP 재생을 사용하여 비디오 앱에 고급 멀티태스킹 기능을 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="adopting-picture-in-picture-in-a-custom-player.md">Adopting Picture in Picture in a Custom Player</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">사용자 정의 플레이어 사용자 인터페이스에 Picture in Picture(PiP) 재생을 시작하는 컨트롤을 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="adopting-picture-in-picture-for-video-calls.md">Adopting Picture in Picture for video calls</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Add multitasking capability to your video-call apps by using Picture in Picture (PiP).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="accessing-the-camera-while-multitasking-on-ipad.md">Accessing the camera while multitasking on iPad</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Operate the camera in Split View, Slide Over, Picture in Picture, and Stage Manager modes.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avpictureinpicturecontroller.md">class AVPictureInPictureController</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">A controller that responds to user-initiated Picture in Picture playback of video in a floating, resizable window.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/avkit/adopting-picture-in-picture-in-a-standard-player">View on Apple Developer</a>*</span>
