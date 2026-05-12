---
source_path: "documentation/AppKit/nsapplication/didupdatenotification.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsapplication/didupdatenotification"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:didupdatenotification:0000:0001">didUpdateNotification</span>

<span class="ko-segment" data-segment-id="seg:paragraph:didupdatenotification:0001:0001">**Framework**: AppKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:didupdatenotification:0002:0001"><a href="nsapplication/updatewindows(">@@TOKEN_0@@</a>.md) 메서드의 끝에서 앱이 창 업데이트를 완료했음을 나타내기 위해 게시됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:didupdatenotification:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:didupdatenotification:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class let didUpdateNotification: NSNotification.Name
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">알림 객체는 <code>NSApp</code>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 알림에는 <code>userInfo</code> 사전이 포함되어 있지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">시스템은 이 알림을 main actor에서 게시합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="nsapplication/didbecomeactivenotification.md">class let didBecomeActiveNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">앱이 활성 상태가 된 즉시 게시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nsapplication/didchangescreenparametersnotification.md">class let didChangeScreenParametersNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">컴퓨터에 연결된 디스플레이의 구성이 변경될 때 게시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nsapplication/didfinishlaunchingnotification.md">class let didFinishLaunchingNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001"><a href="nsapplication/finishlaunching(">@@TOKEN_0@@</a>.md) 메서드의 끝에서 앱이 실행을 완료하고 실행할 준비가 되었음을 나타내기 위해 게시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nsapplication/didhidenotification.md">class let didHideNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001"><a href="nsapplication/hide(_:">@@TOKEN_0@@</a>.md) 메서드의 끝에서 앱이 이제 숨겨졌음을 나타내기 위해 게시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nsapplication/didresignactivenotification.md">class let didResignActiveNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">앱이 활성 상태를 다른 앱에 양도한 즉시 후에 게시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="nsapplication/didunhidenotification.md">class let didUnhideNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001"><a href="nsapplication/unhidewithoutactivation(">@@TOKEN_0@@</a>.md) 메서드의 끝에서 앱이 이제 표시됨을 나타내기 위해 게시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="nsapplication/willbecomeactivenotification.md">class let willBecomeActiveNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">앱이 활성 상태가 되기 직전에 게시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="nsapplication/willfinishlaunchingnotification.md">class let willFinishLaunchingNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001"><a href="nsapplication/finishlaunching(">@@TOKEN_0@@</a>.md) 메서드의 시작에서 앱이 초기화 과정을 마치고 곧 실행이 완료될 예정임을 나타내기 위해 게시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="nsapplication/willhidenotification.md">class let willHideNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001"><a href="nsapplication/hide(_:">@@TOKEN_0@@</a>.md) 메서드의 시작에서 앱이 곧 숨겨질 것을 나타내기 위해 게시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="nsapplication/willresignactivenotification.md">class let willResignActiveNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">앱이 활성 상태를 다른 앱에 양도하기 직전에 게시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="nsapplication/willterminatenotification.md">class let willTerminateNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">앱을 종료하기 위한 알림을 보냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="nsapplication/willunhidenotification.md">class let willUnhideNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">앱이 곧 표시되기 시작함을 나타내기 위해 <a href="nsapplication/unhidewithoutactivation(">@@TOKEN_0@@</a>.md) 메서드 시작 시점에 게시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="nsapplication/willupdatenotification.md">class let willUpdateNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">앱이 창을 업데이트하려는 시점을 나타내기 위해 <a href="nsapplication/updatewindows(">@@TOKEN_0@@</a>.md) 메서드 시작 시점에 게시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="nsapplication/didfinishrestoringwindowsnotification.md">class let didFinishRestoringWindowsNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">앱이 창 복원을 완료했을 때 게시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="nsapplication/didchangeocclusionstatenotification.md">class let didChangeOcclusionStateNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">앱의 <code>occlusion</code> 상태가 변경될 때 게시됩니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/appkit/nsapplication/didupdatenotification">View on Apple Developer</a>*</span>
